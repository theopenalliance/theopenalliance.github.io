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
  {
    number: 1339,
    name: "AngelBotics",
    location: "Denver, CO",
    media: [
      CD("https://www.chiefdelphi.com/t/1339-open-alliance-blog-2023/419469"),
    ],
  },
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
  {
    number: 3636,
    name: "Generals",
    location: "Portland, OR",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/3636-generals-2023-build-thread/420237"
      ),
      Code("https://github.com/FRC3636/frc-2023"),
      CAD(
        "https://cad.onshape.com/documents/45fc202da3f47c5a02e4bd70/w/b3df31d228ec8822a1108ce9/e/6f548eacf684f79cebdf6008"
      ),
      Linktree("https://linktr.ee/Generals3636"),
    ],
  },
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
  {
    number: 7407,
    name: "Wired Boars",
    location: "Wallingford, CT",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/7407-the-wired-boars-open-alliance-build-thread-2023/421571"
      ),
    ],
  },
  {
    number: 7461,
    name: "Sushi Squad",
    location: "Redmond, WA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-7461-sushi-squad-2023-build-thread/421793"
      ),
      Code("https://github.com/SushiSquad7461/2023-temaki"),
    ],
  },
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
  {
    number: 8177,
    name: "Vector",
    location: "Tomball, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/vector-8177-build-thread-open-alliance-2023/420478"
      ),
      Code("https://github.com/Vector8177/2023-Vector-Robot"),
      CAD(
        "https://cad.onshape.com/documents/d4e4908687aabe80063400e1/w/62e86f1d5af7934718aa286b/e/afe77124be83abc5c41a82bd?renderMode=0&uiState=63ae1d2751c8f322226c0991"
      ),
    ],
  },

  //
  {
    number: 1757,
    name: "Wolverines",
    location: "Westwood, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1757-wolverines-2022-2023-build-thread/416564"
      ),
      Code("https://github.com/1757WestwoodRobotics/2023-ChargedUp"),
    ],
  },
  {
    number: 2158,
    name: "ausTIN CANs",
    location: "Austin, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/austin-cans-2158-2023-build-blog/420869"
      ),
    ],
  },
  {
    number: 2582,
    name: "PantherBots",
    location: "Lufkin, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2582-pantherbots-build-blog-open-alliance-2023/419467"
      ),
    ],
  },
  {
    number: 3161,
    name: "Tronic Titans",
    location: "Oakville, ON",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/tronic-titans-3161-build-thread-open-alliance-2023/421032"
      ),
    ],
  },
  {
    number: 3467,
    name: "Windham Windup",
    location: "Windham, NH",
    media: [
      CD("https://www.chiefdelphi.com/t/team-3467-2023-build-blog/417264"),
    ],
  },
  {
    number: 4099,
    name: "The Falcons",
    location: "Poolesville, MD",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-4099-the-falcons-2023-build-blog/420328"
      ),
      CAD(
        "https://cad.onshape.com/documents/6b2c6faaaaa4880c7ea8ef34/w/c2ad5add28c351427b5e329%5B%E2%80%A6%5D58f8604bba3bf43?renderMode=0&uiState=63aa873679ac0f545a07059c"
      ),
      Code("https://github.com/team4099/ChargedUp-2023"),
    ],
  },
  {
    number: 4329,
    name: "Lutheran Roboteers",
    location: "Saint Peters, MO",
    media: [
      CD("https://www.chiefdelphi.com/t/frc-4329-2023-build-thread/419733/"),
      Code("https://github.com/4329"),
    ],
  },
  {
    number: 5013,
    name: "Trobots",
    location: "Kansas City, MO",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/5013-the-trobots-2023-charged-up-open-alliance-build-thread/419112"
      ),
    ],
  },
  {
    number: 5119,
    name: "Team STEAM",
    location: "Lawrence, KS",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/5119-open-alliance-build-thread/419226"
      ),
      CAD(
        "https://workbench.grabcad.com/workbench/projects/gcQYQcQm7qEqhg__dfrLLm-t-Aa99Meb_BQspqceNaLdIR#/space/gcyeG68w0ROpBNKOyQh1ZiGPbjS_393W_FrTKu-xlYx_Q6"
      ),
    ],
  },
  {
    number: 5414,
    name: "Pearadox",
    location: "Pearland, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-5414-pearadox-2023-build-thread/420629/"
      ),
    ],
  },
  {
    number: 5987,
    name: "Galaxia in memory of David Zohar",
    location: "Haifa, Israel",
    media: [
      CD("https://www.chiefdelphi.com/t/5987-galaxia-2023-build-thread/420543"),
      Code("https://github.com/Galaxia5987"),
    ],
  },
  {
    number: 6838,
    name: "X-SHARC",
    location: "Istanbul, TR",
    media: [
      CD("https://www.chiefdelphi.com/t/x-sharc-6838-build-blog-2023/420915"),
      Code("https://github.com/X-SHARC"),
    ],
  },
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
