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
      Code("https://github.com/first95"),
      CAD(
        "https://cad.onshape.com/documents/f39c65f0231d5f8868892a7b/w/992aa826d21f73a3e6208eac/e/baa93adb8eec6a291f849550"
      ),
      Photos("https://imgur.com/a/otSElpv"),
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
    number: 3749,
    name: "Team Optix",
    location: "San Diego, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-3749-team-optix-2023-charged-up-oa-build-season-thread/423631"
      ),
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
    number: 118,
    name: "Everybot",
    location: "Houston, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/the-2023-robonauts-everybot-low-resource-build/421783"
      ),
      { url: "https://www.youtube.com/watch?v=def5QH7UUIU", name: "Video" },
      { url: "https://www.118everybot.org/2023-resources", name: "Resources" },
    ],
  },
  {
    number: 319,
    name: "Big Bad Bob",
    location: "Alton, NH",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/319-big-bad-bob-2023-open-alliance/422705"
      ),
      CAD(
        "https://cad.onshape.com/documents/4cfe8a469da6d22fa88411a7/w/a228dc2be1d261ac3eadeb57/e/053712ace65808283c0d2b40?renderMode=0&uiState=63bd8b111884b73d668a0451"
      ),
    ],
  },
  {
    number: 342,
    name: "Burning Magnetos",
    location: "North Charleston, SC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/342-the-burning-magnetos-2023-open-alliance-build-blog/419198"
      ),
    ],
  },
  {
    number: 599,
    name: "The Robodox",
    location: "Granada Hills, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/599-the-robodox-2023-build-thread/419249"
      ),
      Code("https://github.com/Robodox-599"),
    ],
  },
  {
    number: 847,
    name: "PHRED",
    location: "Philomath, OR",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/847-phred-2023-open-alliance-build-thread/419201"
      ),
      CAD(
        "https://cad.onshape.com/documents/a9d1eca3daf97ec53b038141/w/4b7cf67f599f5f62b7a814ef/e/5b1c8d352f95af8df79a554a"
      ),
    ],
  },
  {
    number: 948,
    name: "NRG (Newport Robotics Group)",
    location: "Bellevue, WA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/nrg-948-2023-open-alliance-build-thread/422399"
      ),
      Code("https://github.com/NRG948"),
      CAD(
        "https://cad.onshape.com/documents/b2deded47ae2e34a62a675d6/w/4483ef0ec4ec611fe27f4a7d/e/5bcbe184c5278b91d33d8a91"
      ),
    ],
  },
  {
    number: 1018,
    name: "Pike RoboDevils",
    location: "Indianapolis, IN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1018-pike-robodevils-2023-open-alliance-build-thread/423504"
      ),
      CAD(
        "https://cad.onshape.com/documents/022fd7a0bb2eb2e4268d0e52/w/0c8c2de336933debc8e4451a/e/60f16f0e0a35e818cebb159a?renderMode=0&uiState=63cf6abf63f4196283759e85"
      ),
    ],
  },
  {
    number: 1418,
    name: "Vae Victis",
    location: "Falls Church, VA",
    media: [
      CD("https://www.chiefdelphi.com/t/frc-1418-2023-build-thread/420421"),
    ],
  },
  {
    number: 1466,
    name: "Webb Robotics",
    location: "Knoxville, TN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1466-webb-robotics-2023-build-thread/419830"
      ),
      CAD(
        "https://cad.onshape.com/documents/b81f7de6d00338cbe75874a2/w/1037360d591643950d552af1/e/8338c7000d95bd68aa575bf4?renderMode=0&uiState=63ccaf3cda6feb72e309c275"
      ),
      Code("https://github.com/FRC1466"),
    ],
  },
  {
    number: 1511,
    name: "Rolling Thunder",
    location: "Penfield, NY",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-1511-rolling-thunder-2023-build-thread/420846"
      ),
    ],
  },
  {
    number: 1672,
    name: "Robo-T-Birds",
    location: "Mahwah, NJ",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/1672-robo-t-birds-2023-build-thread/419228"
      ),
      Code("https://github.com/FRCTeam1672/2023-Robot"),
    ],
  },
  {
    number: 1675,
    name: "UPS",
    location: "Milwaukee, WI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/1675-ups-open-alliance-build-thread/419479"
      ),
      Code("https://github.com/frc1675"),
      CAD(
        "https://cad.onshape.com/documents/29513bb20d40edfa37fa2393/w/e1f8d8ce1eb8fe1e955311e8/e/660513d2a0183a629db6e53c"
      ),
    ],
  },
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
    number: 2357,
    name: "System Meltdown",
    location: "Peculiar, MS",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2357-system-meltdown-2023-open-alliance-build-thread/420831/"
      ),
    ],
  },
  {
    number: 2491,
    name: "NoMythic",
    location: "Saint Paul, MN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2491-nomythic-build-thread-open-alliance-2023/421306"
      ),
    ],
  },

  {
    number: 2521,
    name: "SERT",
    location: "Eugene, OR",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2521-sert-open-alliance-build-thread-2023/419662"
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
    number: 2643,
    name: "Dark Matter",
    location: "San Jose, CA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-dark-matter-2643-build-thread-for-2023/420701/"
      ),
      Code("https://github.com/2643"),
    ],
  },
  {
    number: 2656,
    name: "Quasics",
    location: "Monroeville, PA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2656-quasics-2023-open-alliance-build-thread/420930"
      ),
    ],
  },
  {
    number: 2713,
    name: "Red Hawk Robotics",
    location: "Melrose, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2713-red-hawk-robotics-2023-build-thread/420049"
      ),
      Code("https://github.com/FRC2713/Robot2023"),
      CAD(
        "https://cad.onshape.com/documents/8bb8a620cd015d977bc57e69/w/c808c2431240746727811726/e/5abecf4b7dd9aebf2cb0916e"
      ),
    ],
  },
  {
    number: 2877,
    name: "LigerBots",
    location: "West Newton, MA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/ligerbots-2877-frc-openalliance-build-thread-2023/420435"
      ),
      Code("https://github.com/ligerbots/ChargedUp2023"),
    ],
  },
  {
    number: 2881,
    name: "Lady Cans",
    location: "Austin, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2881-lady-cans-2023-build-thread/420937"
      ),
    ],
  },
  {
    number: 2996,
    name: "Cougars Gone Wired",
    location: "Colorado Springs, CO",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-2996-cougars-gone-wired-2023-build-thread/419077"
      ),
      Code("https://gitlab.com/cougars-gone-wired/2023-charged-up"),
      Linktree("https://linktr.ee/cougarsgonewired"),
    ],
  },
  {
    number: 3136,
    name: "Official Robotics Constructors of Ashland",
    location: "Ashland, VA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-3136-orca-2023-open-alliance-build-log/420623"
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
    number: 3181,
    name: "Pittsford Panthers",
    location: "Pittsford, NY",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-3181-pittsford-robotics-2023-build-thread/420726"
      ),
      Code("https://github.com/pittsfordrobotics/ChargedUp2023"),
    ],
  },
  {
    number: 3405,
    name: "ALChemists",
    location: "Salem, UT",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/3405-the-alchemists-2023-build-thread/422989"
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
    number: 3544,
    name: "Spartiates",
    location: "Montreal-Nord, QC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/2023-frc-3544-spartiates-build-thread/420975"
      ),
      Code("https://github.com/Spartiates-3544"),
      CAD(
        "https://cad.onshape.com/documents/9dbcc665debcee4e3542cef6/w/1b49d9e6c8d0941a183fb366/e/45281f9c8fa2dd3e94a87536"
      ),
    ],
  },
  {
    number: 3792,
    name: "Army Ants",
    location: "Columbia, MO",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/team-3792-the-army-ants-build-thread/423357"
      ),
    ],
  },
  {
    number: 3926,
    name: "MPArors",
    location: "Saunt Paul, MN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/team-3926-mparor-robotics-2023-open-alliance-thread/422393"
      ),
      CAD(
        "https://cad.onshape.com/documents/b4ce2eefa49846c6dfac2e51/w/d102ea67771c5deb6fd79a5a/e/cea1cbbc56da02c089f3c649?renderMode=0&uiState=63bdf524acf5605ba574ac5e"
      ),
      Code("https://github.com/mparobotics/2023-Season"),
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
    number: 4131,
    name: "Iron Patriots",
    location: "Renton, WA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-4131-iron-patriots-2022-2023-season/418438/"
      ),
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
    number: 4392,
    name: "The Deceivers",
    location: "Brimley, MI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/4392-the-deceivers-2023-open-alliance-build-thread/419180"
      ),
      Code("https://github.com/FRC4392"),
      CAD(
        "https://cad.onshape.com/documents/275a73987156633b267c9da5/w/8fe217cac21309c4508877b5/e/c6038dc63bc6f95a12e3ae6d"
      ),
    ],
  },
  {
    number: 4458,
    name: "Infernobotix",
    location: "Center Moriches, NY",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/4458-infernobotix-2023-open-alliance-thread/419971"
      ),
      Code("https://github.com/frcteam4458"),
      CAD(
        "https://cad.onshape.com/documents/55408087d1960b18cc228f97/w/b77ce73de4e749f2f22dbf09/e/5937d2491493d30dbf5fa110?renderMode=0&uiState=63c2d08934300841e59e041e"
      ),
    ],
  },
  {
    number: 4504,
    name: "B.C. Robotics",
    location: "Maryville, TN",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/4504-bc-robotics-2023-open-alliance-build-thread/419487"
      ),
    ],
  },
  {
    number: 4587,
    name: "Jersey Voltage 4587",
    location: "Jersey Village, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/jersey-voltage-4587-build-thread-2022-2023/420389"
      ),
    ],
  },
  {
    number: 4795,
    name: "Eastbots",
    location: "Chapel Hill, NC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/4795-eastbots-2023-build-thread/419806"
      ),
      Code("https://github.com/Team-4795"),
      CAD(
        "https://cad.onshape.com/documents?column=modifiedAt&nodeId=2bcf9c3eab1e130449f5ca4f&resourceType=folder&sortOrder=desc"
      ),
    ],
  },
  {
    number: 4926,
    name: "GalacTech",
    location: "Columbus, IN",
    media: [
      CD("https://www.chiefdelphi.com/t/galactech-4926-build-blog-2023/420401"),
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
      Code("https://github.com/FRC-5013-Park-Hill-Robotics/2023-ChargedUp"),
      CAD(
        "https://cad.onshape.com/documents/62b9c96d433a6e966282e5ca/w/f5f78b512d0a5a0a63f0a8f6/e/74ccf445de4c54e65840d838"
      ),
      Photos(
        "https://drive.google.com/drive/folders/1zoV6nJ99F3mq9suKthLtooNE7yOdJUKV?usp=sharing"
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
    number: 5417,
    name: "Eagle Robotics",
    location: "Allen, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/5417-eagle-robotics-build-blog-open-alliance-2023/419396"
      ),
    ],
  },
  {
    number: 5553,
    name: "Robo'Lyon",
    location: "Neuville-sur-Saône, Rhône, France",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-5553-robolyon-2023-build-thread/420918"
      ),
    ],
  },
  {
    number: 5937,
    name: "MI-Robotics",
    location: "Mercer Island, WA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/5937-mi-robotics-2023-build-thread/420020"
      ),
      Code("https://github.com/frcmi/Robot2023"),
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
    number: 6421,
    name: "WarriorBots",
    location: "Muskego, WI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/6421-warriorbots-2023-build-thread-open-alliance-2023/420130"
      ),
      CAD(
        "https://cad.onshape.com/documents/4be16f6ba455a61bd96f7845/w/bffd04c0cd52e71d6a01a952/e/9ab4e9123aa743f088d59ce2"
      ),
      Code("https://github.com/frc6421/2023-robot"),
    ],
  },
  {
    number: 6423,
    name: "Ward Melville Iron Patriots",
    location: "East Setauket, NY",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/6423-iron-patriots-build-thread-open-alliance-2022-2023/420283"
      ),
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
  {
    number: 6925,
    name: "W.A.Robotics",
    location: "College Park, GA",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/6925-w-a-robotics-open-alliance-build-thread-2023/419347"
      ),
    ],
  },
  {
    number: 7125,
    name: "Tigerbotics",
    location: "Glen Rose, TX",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-7125-tigerbotics-2023-build-thread/418430"
      ),
      Code("https://github.com/Tigerbotics7125/FRC2023"),
      CAD(
        "https://cad.onshape.com/documents/d8dba1e621fe70f5ca018089/w/7f3a18962610419c231b1b37/e/3ed6eb07778edc7db9784603?renderMode=0&uiState=63b1e4876eb2a76cc2bb1366"
      ),
    ],
  },
  {
    number: 7312,
    name: "T3",
    location: "Tomball, TX",
    media: [
      CD("https://www.chiefdelphi.com/t/7312-t3-2023-build-thread/421426"),
      CAD("https://github.com/t3team-laptop/T3-CAD"),
    ],
  },
  {
    number: 8725,
    name: "MistyPanther",
    location: "New Taipei, TW",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-8725-mistypanther-2023-build-thread/420195"
      ),
      Code("https://github.com/FRC8725/2023-Robot"),
      CAD("https://grabcad.com/lin.powei-1"),
    ],
  },
  {
    number: 8726,
    name: "CryptoHawks",
    location: "Ijamsville, MD",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-8726-cryptohawks-2022-2023-build-blog/420956"
      ),
    ],
  },
  {
    number: 8728,
    name: "Argonauts",
    location: "Troy, MI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-8728-argonauts-2023-open-alliance-build-thread/423652"
      ),
    ],
  },
  {
    number: 8738,
    name: "SLICE",
    location: "Fuquay Varina, NC",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/8738-slice-2023-open-alliance-build-thread/419445"
      ),
    ],
  },
  {
    number: 8574,
    name: "Audeamus",
    location: "North York, ON",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/8574-audeamus-2023-open-alliance-build-thread/422045"
      ),
      Code("https://github.com/roboticsmgci"),
    ],
  },
  {
    number: 9312,
    name: "NERD Spark",
    location: "Canton, MI",
    media: [
      CD(
        "https://www.chiefdelphi.com/t/frc-9312-nerd-spark-2023-build-thread/423118"
      ),
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
