import React from "react";
import Layout from "../../components/Layout";
import logo from "../../images/logo/darkbg.png";

import { Helmet } from "react-helmet";

import TeamInfoTable, {
  FeaturedTeamInfos,
  TeamInfo,
} from "../../components/TeamInfoTable";
import teamData from "../../data/teams2024.json";

const allTeams: TeamInfo[] = teamData;

const spotlightTeams: TeamInfo[] = allTeams.filter((t) =>
  [0].includes(t.number)
);

export default function Teams2024(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>2024 Teams | The Open Alliance</title>
      </Helmet>

      <FeaturedTeamInfos teamInfo={spotlightTeams} year={2024} />
      <TeamInfoTable teamInfo={allTeams} />
    </Layout>
  );
}
