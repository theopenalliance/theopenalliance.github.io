import React from "react";
import Layout from "../../components/Layout";
import logo from "../../images/logo/darkbg.png";

import Table from "react-bootstrap/Table";
import { Button, ButtonGroup } from "react-bootstrap";

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

const spotlightTeams: TeamInfo[] = [
  {
    number: 95,
    name: "Grasshoppers",
    location: "White River Junction, VT",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc95-2022-build-thread/398263",
      },
    ],
  },
  {
    number: 1339,
    name: "AngelBotics",
    location: "Denver, CO",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/1339-open-alliance-build-thread/398264",
      },
    ],
  },
  {
    number: 2713,
    name: "iRaiders",
    location: "Melrose, MA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-2713-iraiders-2022-build-thread/398350",
      },
    ],
  },
  {
    number: 3636,
    name: "Generals",
    location: "Portland, OR",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/3636-open-alliance-2022-build-thread/398429",
      },
    ],
  },
  {
    number: 3847,
    name: "Spectrum -△◅",
    location: "Houston, TX",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/spectrum-3847-build-blog-2022/399190",
      },
    ],
  },
  {
    number: 4481,
    name: "Team Rembrandts",
    location: "Eindhoven, Netherlands",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-4481-team-rembrandts-2022-build-thread/398855",
      },
    ],
  },
  {
    number: 6328,
    name: "Mechanical Advantage",
    location: "Littleton, MA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-6328-mechanical-advantage-2022-build-thread/398645",
      },
    ],
  },
  {
    number: 7492,
    name: "CavBots",
    location: "The Woodlands, TX",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/7492-cavbots-2022-build-blog/398060",
      },
    ],
  },
].sort((a, b) => a.number - b.number);

const allTeams: TeamInfo[] = [
  ...spotlightTeams,
  {
    number: 7407,
    name: "Wired Boars",
    location: "Wallingford, CT",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-7407-2022-open-alliance-build-thread/398674",
      },
      {
        name: "Offseason Thread",
        url: "https://www.chiefdelphi.com/t/7407-offseason-upgrades-open-alliance/413213",
      },
    ],
  },
  {
    number: 4099,
    name: "The Falcons",
    location: "Poolesville, MD",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-4099-the-falcons-2022-build-blog/398376",
      },
    ],
  },
  {
    number: 4926,
    name: "GalacTech",
    location: "Columbus, IN",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/galactech-4926-build-blog-2022/398705",
      },
    ],
  },
  {
    number: 4329,
    name: "Lutheran Roboteers",
    location: "Saint Peters, MO",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-4329-2022-build-thread/401500",
      },
    ],
  },
  {
    number: 7461,
    name: "Sushi Squad",
    location: "Redmond, WA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-7461-sushi-squad-2022-build-thread/398649",
      },
    ],
  },
  {
    number: 3136,
    name: "Official Robotics Constructors of Ashland",
    location: "Ashland, VA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/orca3136-open-alliance-2022-build-log/399120",
      },
    ],
  },
  {
    number: 5987,
    name: "Galaxia in memory of David Zohar",
    location: "Haifa, Israel",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-5987-open-alliance-build-thread/398861",
      },
    ],
  },
  {
    number: 3506,
    name: "YETI Robotics",
    location: "Charlotte, NC",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-3506-yeti-robotics-2022-build-thread/398740",
      },
    ],
  },
  {
    number: 2656,
    name: "Quasics",
    location: "Monroeville, PA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/frc-2656-quasics-2022-build-thread/398694",
      },
    ],
  },
  {
    number: 2877,
    name: "LigerBots",
    location: "Newton, MA",
    media: [
      {
        name: "Build Thread",
        url: "https://www.chiefdelphi.com/t/ligerbots-frc-2877-openalliance-build-thread-2022/398824",
      },
    ],
  },
].sort((a, b) => a.number - b.number);

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
          <tr className="align-middle">
            <td>
              <a href={`https://www.thebluealliance.com/team/${t.number}/2022`}>
                {t.number}
              </a>
            </td>
            <td>{t.name}</td>
            <td>{t.location}</td>
            <td>
              <ButtonGroup>
                {t.media?.map((m) => (
                  <Button href={m.url} variant="outline-primary" size="sm">
                    {m.name}
                  </Button>
                ))}
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default function Teams2022(): JSX.Element {
  return (
    <Layout>
      <h1 style={{ color: "red" }} className="text-center">
        This page is not complete and is a work in progress. Highlighted teams
        are not final. Simply for UI testing purposes.
      </h1>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="72"
          height="72"
        />
        <h1 className="display-5 fw-bold">2022 Highlighted Teams</h1>
        <div className="col-lg-7 mx-auto">
          <p className="lead mb-4"></p>
          <TeamInfoTable teamInfo={spotlightTeams} />
        </div>
      </div>
      <h1>All 2022 Open Alliance Teams</h1>
      <TeamInfoTable teamInfo={allTeams} />
    </Layout>
  );
}
