import React from "react";
import Layout from "../../components/Layout";
import logo from "../../images/logo/darkbg.png";

import { Button, ButtonGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet";

interface Media {
  url: string;
  name: string;
}

interface TeamInfo {
  number: number;
  name: string;
  location: string;
  media?: Media[];
}

const CD = (url: string): Media => ({ url, name: "Build Thread" });
const CAD = (url: string): Media => ({ url, name: "CAD" });
const Photos = (url: string): Media => ({ url, name: "Photos" });
const YouTube = (url: string): Media => ({ url, name: "YouTube" });
const Code = (url: string): Media => ({ url, name: "Code" });
const Linktree = (url: string): Media => ({ url, name: "LinkTree" });

const allTeams: TeamInfo[] = [
  {
    number: 95,
    name: "Grasshoppers",
    location: "White River Junction, VT",
    media: [],
  },
  { number: 1339, name: "AngelBotics", location: "Denver, CO", media: [] },
  { number: 3506, name: "YETI Robotics", location: "Charlotte, NC", media: [] },
  { number: 3512, name: "Spartatroniks", location: "Orcutt, CA", media: [] },
  { number: 3636, name: "Generals", location: "Portland, OR", media: [] },
  { number: 3847, name: "Spectrum -△◅", location: "Houston, TX", media: [] },
  {
    number: 4481,
    name: "Team Rembrandts",
    location: "Eindhoven, Netherlands",
    media: [],
  },
  {
    number: 6328,
    name: "Mechanical Advantage",
    location: "Littleton, MA",
    media: [],
  },
  { number: 7407, name: "Wired Boars", location: "Wallingford, CT", media: [] },
  { number: 7461, name: "Sushi Squad", location: "Redmond, WA", media: [] },
  { number: 7492, name: "CavBots", location: "The Woodlands, TX", media: [] },
  { number: 8177, name: "Vector", location: "Tomball, TX", media: [] },
].sort((a, b) => a.number - b.number);

const spotlightTeams: TeamInfo[] = allTeams.filter((t) =>
  [
    95, 1339, 3506, 3512, 3636, 3847, 4481, 6328, 7407, 7461, 7492, 8177,
  ].includes(t.number)
);

function TeamInfoRow(props: { teamInfo: TeamInfo }): JSX.Element {
  return (
    <tr className="align-middle">
      <td>
        <a
          href={`https://www.thebluealliance.com/team/${props.teamInfo.number}/2023`}
        >
          {props.teamInfo.number}
        </a>
      </td>
      <td>{props.teamInfo.name}</td>
      <td>{props.teamInfo.location}</td>
      <td>
        <ButtonGroup>
          {props.teamInfo.media?.map((m) => (
            <Button
              href={m.url}
              variant="outline-primary"
              size="sm"
              className="text-nowrap"
              key={m.url}
            >
              {m.name}
            </Button>
          ))}
        </ButtonGroup>
      </td>
    </tr>
  );
}

function TeamInfoTable(props: { teamInfo: TeamInfo[] }): JSX.Element {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Public Links</th>
        </tr>
      </thead>
      <tbody>
        {props.teamInfo.map((t) => (
          <TeamInfoRow teamInfo={t} key={t.name} />
        ))}
      </tbody>
    </Table>
  );
}

function TinyHighlight(props: { team: TeamInfo }): JSX.Element {
  return (
    <div className="col-sm d-flex align-items-start">
      <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
      <div className="text-start">
        <a
          className="h3 text-decoration-none"
          href={`https://www.thebluealliance.com/team/${props.team.number}/2023`}
        >
          {props.team.number} - {props.team.name}
        </a>
        <p>{props.team.location}</p>
        <ButtonGroup style={{ flexWrap: "wrap" }}>
          {props.team.media?.map((m) => (
            <Button
              href={m.url}
              variant="outline-primary"
              size="sm"
              className="text-nowrap"
              key={m.url}
            >
              {m.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}

export default function Teams2023(): JSX.Element {
  const oa_logo_size = 56;
  return (
    <Layout>
      <Helmet>
        <title>2023 Teams | The Open Alliance</title>
      </Helmet>
      <div className="px-4 pt-4 pb-5 text-center">
        <div className="clearfix">
          <img
            className="pull-left"
            src={logo}
            alt=""
            width={oa_logo_size}
            height={oa_logo_size}
          />
          <span className="h1 align-middle ps-2">2023 Highlighted Teams</span>
        </div>
        <div className="">
          <div className="container px-4 pb-3" id="hanging-icons">
            <div className="row g-5 py-5 row-cols-1 row-cols-md-4">
              {spotlightTeams.map((t) => (
                <TinyHighlight team={t} key={t.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="d-inline-flex align-items-center">
        <h1>2023 Open Alliance Teams </h1>
        <h5>
          <span className="badge text-bg-secondary rounded-pill ms-3">
            {allTeams.length}
          </span>
        </h5>
      </div>

      <TeamInfoTable teamInfo={allTeams} />
    </Layout>
  );
}
