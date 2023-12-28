import React from "react";
import Layout from "../../components/Layout";

import { Helmet } from "react-helmet";
import TeamInfoTable, {
  FeaturedTeamInfos,
} from "../../components/TeamInfoTable";

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
      CD("https://www.chiefdelphi.com/t/frc95-2022-build-thread/398263"),
      CAD("https://cad.onshape.com/documents/ff29bfac394b96c4cbc0d4e7"),
      Code("https://github.com/first95/FRC2022"),
      Photos("https://imgur.com/a/NjDfHCq"),
      YouTube("https://www.youtube.com/channel/UCRXcfSYmEfn7XpdtmPtiFZA"),
    ],
  },
  {
    number: 1339,
    name: "AngelBotics",
    location: "Denver, CO",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/1339-open-alliance-build-thread/398264"
      ),
      CAD(
        "https://cad.onshape.com/documents/88b99c758855cbe7121ae77c/w/35167a1e331b7ee18e42ad0d/e/d3b9e693ad11c34f42f4fa88"
      ),
      Code("https://github.com/Angelbots1339/2022_Competition_Season"),
      {
        name: "Pit Thread",
        url: "https://www.chiefdelphi.com/t/1339-open-alliance-super-pit",
      },
    ],
  },
  {
    number: 2713,
    name: "iRaiders",
    location: "Melrose, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2713-iraiders-2022-build-thread/398350"
      ),
      CAD(
        "https://cad.onshape.com/documents/03f8a0da7179b63f708c664f/w/82aa1887423a1d97da774162/e/7f81ae34c2b2b5582f4c7f7b"
      ),
      Code("https://github.com/iraiders/Robot2022"),
    ],
  },
  {
    number: 3636,
    name: "Generals",
    location: "Portland, OR",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/3636-open-alliance-2022-build-thread/398429"
      ),
      CAD(
        "https://cad.onshape.com/documents/cd0b0e474e581bdfec4f150d/w/373f57dad67277118d0ce57f/e/c2171cda5e1e5e8ab11e90ac"
      ),
      Code("https://github.com/FRC3636/frc-2022"),
      Linktree("https://linktr.ee/Generals3636"),
    ],
  },
  {
    number: 3847,
    name: "Spectrum -△◅",
    location: "Houston, TX",
    media: [
      CD("https://www.chiefdelphi.com/t/spectrum-3847-build-blog-2022/399190"),
      CAD(
        "https://cad.onshape.com/documents/995ee9b75573cf463f84dbbc/w/80aecca8674f728b1e04236c/e/dac0a7693d84c119c3ce8bab"
      ),
      Code("https://github.com/Spectrum3847/Infrared-2022"),
      Photos("https://photos.spectrum3847.org/2022-FRC-1/2022-Build-Season-1/"),
    ],
  },
  {
    number: 4481,
    name: "Team Rembrandts",
    location: "Eindhoven, Netherlands",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-4481-team-rembrandts-2022-build-thread/398855"
      ),
      CAD(
        "https://grabcad.com/library/frc-4481-team-rembrandts-resurrection-v3-1"
      ),
      YouTube("https://www.youtube.com/c/Teamrembrandts"),
    ],
  },
  {
    number: 6328,
    name: "Mechanical Advantage",
    location: "Littleton, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-6328-mechanical-advantage-2022-build-thread/398645"
      ),
      CAD(
        "https://cad.onshape.com/documents/b83cb8e60cea7c17cbee6692/w/13284a7a33c1b2621631c2ee/e/ee2cff08193b9fc024e2c99f?renderMode=0&uiState=61d32f5fe24e8c7bed4016c8"
      ),
      Code("https://github.com/Mechanical-Advantage/RobotCode2022"),
      YouTube("https://www.youtube.com/c/LittletonRobotics"),
    ],
  },
  {
    number: 7492,
    name: "CavBots",
    location: "The Woodlands, TX",
    media: [
      CD("https://www.chiefdelphi.com/t/7492-cavbots-2022-build-blog/398060"),
      {
        name: "Google Drive",
        url: "https://drive.google.com/drive/folders/1F3rJx6nQj4Q9a8wefGKip94JwrXC1l82",
      },
      Code("https://github.com/CAVALIER-ROBOTICS/ColorSensorAndArray"),
    ],
  },
  {
    number: 7407,
    name: "Wired Boars",
    location: "Wallingford, CT",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-7407-2022-open-alliance-build-thread/398674"
      ),
      CAD(
        "https://cad.onshape.com/documents/5d38ac872f492af82733f56d/w/4af9dd916c9a9c90f0b68f54/e/7d75120ac9f3c690d0761aa4?renderMode=0&uiState=632b92e6ed490e04156caae2"
      ),
      Code("https://github.com/Choate-Robotics/7407-DriveCode-2021-Python"),
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
      CD(
        "https://www.chiefdelphi.com/t/frc-4099-the-falcons-2022-build-blog/398376"
      ),
      CAD(
        "https://cad.onshape.com/documents/e16f67e7e4025da1d7e26edb/w/7f22d15c129695a9b48949bb/e/6d50ba5d43e6b1fced8a64fc?renderMode=0&uiState=61c60621e4237f79d5b5d01c"
      ),
      Code("https://github.com/team4099/RapidReact-2022"),
    ],
  },
  {
    number: 4926,
    name: "GalacTech",
    location: "Columbus, IN",
    media: [
      CD("https://www.chiefdelphi.com/t/galactech-4926-build-blog-2022/398705"),
      CAD("https://a360.co/3DFLE2v"),
    ],
  },
  {
    number: 4329,
    name: "Lutheran Roboteers",
    location: "Saint Peters, MO",
    media: [
      CD("https://www.chiefdelphi.com/t/frc-4329-2022-build-thread/401500"),
    ],
  },
  {
    number: 7461,
    name: "Sushi Squad",
    location: "Redmond, WA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-7461-sushi-squad-2022-build-thread/398649"
      ),
      Code("https://github.com/SushiSquad7461/2022takowoyaki"),
      YouTube("https://www.youtube.com/channel/UCSWVYWi4sqoSMJUbNg34tOQ"),
      {
        name: "Offseason CAD",
        url: "https://cad.onshape.com/documents/5d34372cc647f58f08a28399",
      },
    ],
  },
  {
    number: 3136,
    name: "Official Robotics Constructors of Ashland",
    location: "Ashland, VA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/orca3136-open-alliance-2022-build-log/399120"
      ),
    ],
  },
  {
    number: 5987,
    name: "Galaxia in memory of David Zohar",
    location: "Haifa, Israel",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-5987-open-alliance-build-thread/398861"
      ),
      Code("https://github.com/Galaxia5987/robot-2022"),
    ],
  },
  {
    number: 3506,
    name: "YETI Robotics",
    location: "Charlotte, NC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-3506-yeti-robotics-2022-build-thread/398740"
      ),
      Code("https://github.com/Yeti-Robotics/2022-stumpy-java"),
    ],
  },
  {
    number: 2656,
    name: "Quasics",
    location: "Monroeville, PA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2656-quasics-2022-build-thread/398694"
      ),
    ],
  },
  {
    number: 2877,
    name: "LigerBots",
    location: "Newton, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/ligerbots-frc-2877-openalliance-build-thread-2022/398824"
      ),
    ],
  },
  {
    number: 5431,
    name: "Titan Robotics",
    location: "Plano, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-5431-titan-robotics-2022-build-thread/400408"
      ),
      Code("https://github.com/frc5431/RobotCode2022"),
    ],
  },
  {
    number: 2239,
    name: "Technocrats",
    location: "Hopkins, MN",
    media: [
      CD("https://www.chiefdelphi.com/t/2239-open-alliance-2022-thread/398646"),
    ],
  },
  {
    number: 8728,
    name: "Argonauts",
    location: "Troy, MI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-8728-open-alliance-build-thread/398431"
      ),
    ],
  },
  {
    number: 3512,
    name: "Spartatroniks",
    location: "Orcutt, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/spartatroniks-3512-build-blog-2022/400462"
      ),
      Code("https://github.com/frc3512/Robot-2022"),
      CAD(
        "https://workbench.grabcad.com/workbench/projects/gcM7PoUCDPGEDtpBrctGTxy7IH1BYj2tG_4GhlI_HaUSKI#/space/gcQwnPBs1fGoj9r1qIF-j87Pfzk9c-cO_FWhIWtQ6Zf1xX"
      ),
    ],
  },
  {
    number: 2357,
    name: "System Meltdown",
    location: "Peculiar, MO",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2357-system-meltdown-2022-build-thread/399174"
      ),
    ],
  },
  {
    number: 6838,
    name: "X-SHARC",
    location: "Istanbul, Turkey",
    media: [
      CD("https://www.chiefdelphi.com/t/x-sharc-6838-build-blog-2022/398883"),
      YouTube("https://www.youtube.com/channel/UC0oGwtQwj7YQhHT5ZtlZo9Q"),
      CAD(
        "https://cad.onshape.com/documents/9b935b486dbc9848cde5923c/w/cdf45017149700a53b7c980f/e/55b4ae123700393e44ffcd5a?renderMode=0&uiState=62e2cde7"
      ),
      Code("https://github.com/X-SHARC/FRC2022"),
    ],
  },
  {
    number: 5417,
    name: "Eagle Robotics",
    location: "Allen, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/eagle-robotics-5417-2022-build-thread/401134"
      ),
    ],
  },
  {
    number: 71,
    name: "Team Hammond",
    location: "Hammond, IN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-71-team-hammond-2022-build-thread/398214"
      ),
    ],
  },
  {
    number: 5104,
    name: "BreakerBots",
    location: "Pacific Grove, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc5104-breakerbots-2022-build-thread/398267"
      ),
    ],
  },
  {
    number: 6762,
    name: "Oscats",
    location: "Hillsborough, NH",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-6762-open-alliance-2022-build-thread/398916"
      ),
    ],
  },
  {
    number: 1466,
    name: "Webb Robotics",
    location: "Knoxville, TN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1466-webb-robotics-2022-build-thread/398774"
      ),
    ],
  },
  {
    number: 2062,
    name: "CORE 2062",
    location: "Waukesha, WI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2062-open-alliance-build-thread/400986"
      ),
    ],
  },
  {
    number: 3161,
    name: "Tronic Titans",
    location: "Oakville, ON",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/team-3161-tronic-titans-build-blog-2022/400485"
      ),
    ],
  },
  {
    number: 8574,
    name: "Audeamus",
    location: "North York, ON",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-8574-audeamus-open-alliance-build-thread/399041"
      ),
    ],
  },
  {
    number: 1745,
    name: "The P-51 Mustangs",
    location: "Richardson, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1745-open-design-for-frc22-again-again-build-thread/398778"
      ),
    ],
  },
  {
    number: 319,
    name: "Big Bad Bob",
    location: "Alton, NH",
    media: [
      CD("https://www.chiefdelphi.com/t/frc-319-public-cad-2022/401715"),
      CAD(
        "https://cad.onshape.com/documents/d73a18f7e47e62256b2a00a7/w/b0fa2b66d1a60d7c767ec941/e/5b3453e07f44725c2c1a9d0e"
      ),
    ],
  },
  {
    number: 8177,
    name: "Vector",
    location: "Tomball, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-vector-8177-build-thread-2022/399372"
      ),
      CAD(
        "https://cad.onshape.com/documents/ead19c1183936a78bf128d66/w/97b44a332fe600567ee677b5"
      ),
      Code("https://github.com/FRC-Team-Vector-8177/2022-Vector-Robot"),
    ],
  },
].sort((a, b) => a.number - b.number);

const spotlightTeams: TeamInfo[] = allTeams.filter((t) =>
  [
    95, 1339, 2713, 3636, 3847, 4481, 6328, 7407, 7492, 7461, 3506, 4926,
  ].includes(t.number)
);

export default function Teams2022(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>2022 Teams | The Open Alliance</title>
      </Helmet>

      <FeaturedTeamInfos teamInfo={spotlightTeams} year={2022} />
      <TeamInfoTable teamInfo={allTeams} />
    </Layout>
  );
}
