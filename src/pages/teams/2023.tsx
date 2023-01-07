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
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-95-the-grasshoppers-2023-build-thread/419845"
      ),
    ],
  },
  { number: 1339, name: "AngelBotics", location: "Denver, CO", media: [] },
  {
    number: 3506,
    name: "YETI Robotics",
    location: "Charlotte, NC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-3506-yeti-robotics-2023-build-thread/420267"
      ),
      CAD(
        "https://workbench.grabcad.com/workbench/projects/gcsk616gCdVvqH6jOjA261Fr03P2kKkb4rglN0IL1kVqZt?#/folder/13160319"
      ),
      Code("https://github.com/Yeti-Robotics"),
    ],
  },
  {
    number: 3512,
    name: "Spartatroniks",
    location: "Orcutt, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/3512-spartatroniks-build-blog-open-alliance-2023/418947"
      ),
      Code("https://github.com/frc3512"),
      CAD(
        "https://workbench.grabcad.com/workbench/projects/gc2QpCbtsXB0WYZOoEQInKtMroc71pRGffMzrLpx68-Xgt#/space/gcZaiGNfkLJXPPyMnXNcMDr6KJZ9FaeUooiJDeN_P_H-Wf"
      ),
      Photos("https://sites.google.com/view/3512spartatroniksmedia/home"),
      {
        name: "COTS CAD Library",
        url: "https://workbench.grabcad.com/workbench/projects/gc4O3Z0_sPNIdHRjfPE_iq3czqY5BlDHvNkJIi2jkm-gmy#/space/gci_GAXOKsHWGfqjw4E18j-yAbWi1Tyxlq2iZjNG83wawu",
      },
    ],
  },
  { number: 3636, name: "Generals", location: "Portland, OR", media: [] },
  {
    number: 3847,
    name: "Spectrum -△◅",
    location: "Houston, TX",
    media: [
      CD("https://www.chiefdelphi.com/t/spectrum-3847-build-blog-2023/420801"),
      CAD(
        "https://cad.onshape.com/documents/de43bfb90686cd44b0870071/w/9d183c2710bcbdcce0b821b4/e/52ffe457d07a49279860d194?renderMode=0&uiState=63b7aed2d3bd0406c606b6a5"
      ),
      Code("https://github.com/Spectrum3847/2023-X-Ray"),
      Photos("http://2023photos.spectrum3847.org/"),
      {
        name: "Design Slides",
        url: "https://docs.google.com/presentation/d/1PCG7xz6cOJPDSg3FQJiweLXDGKiCXPeEejoiuwV4ep8/",
      },
    ],
  },
  {
    number: 4481,
    name: "Team Rembrandts",
    location: "Eindhoven, Netherlands",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-4481-team-rembrandts-2023-build-thread/419624"
      ),
    ],
  },
  {
    number: 6328,
    name: "Mechanical Advantage",
    location: "Littleton, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-6328-mechanical-advantage-2023-build-thread/420691"
      ),
      CAD(
        "https://cad.onshape.com/documents/7b17c8664d1313c397a0fcf3/w/61b5c8329f7f5c6023f50c77/e/a7d35eb44465ab8189abf328"
      ),
      Code("https://github.com/Mechanical-Advantage/RobotCode2023"),
    ],
  },
  { number: 7407, name: "Wired Boars", location: "Wallingford, CT", media: [] },
  { number: 7461, name: "Sushi Squad", location: "Redmond, WA", media: [] },
  {
    number: 7492,
    name: "CavBots",
    location: "The Woodlands, TX",
    media: [
      CD("https://www.chiefdelphi.com/t/7492-cavbots-2023-build-blog/419193"),
      Code("https://github.com/CAVALIER-ROBOTICS"),
      CAD(
        "https://drive.google.com/drive/u/1/folders/1xcI9X9NRQvGNm-n0PRADuEVE8wNkig7h"
      ),
    ],
  },
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
