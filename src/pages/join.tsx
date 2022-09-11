import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Guidelines from "../components/Guidelines";
import Layout from "../components/Layout";

export default function Join(props: {}): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>2022 Teams | The Open Alliance</title>
      </Helmet>

      <Container>
        <br />
        <h1>Joining The Open Alliance</h1>
        <p>
          Anyone is welcome to post content on ChiefDelphi with an{" "}
          <a href="https://www.chiefdelphi.com/tag/openalliance">
            <code>#openalliance</code> tag
          </a>
          . If your team will be posting regular updates, we encourage you to
          apply to The Open Alliance via the following form:
        </p>
        <p>
          <a href="https://forms.gle/jXfSQ7SaVJ7S29b48">
            https://forms.gle/jXfSQ7SaVJ7S29b48
          </a>
        </p>
        <p>
          Once your team has posted 2 updates on your ChiefDelphi build thread,
          we will add your team to the Open Alliance website. Feel free to
          message{" "}
          <a href="https://www.chiefdelphi.com/u/jtrv/summary">Justin</a> on
          Chief if there is a delay in this.
        </p>
        <p></p>
        <p>
          <h1>Guidelines</h1>
          Open Alliance teams are expected to provide the following resources:
          <ul>
            <li>
              ChiefDelphi build thread, with regular updates (once a week
              recommended)
            </li>
            <li>Either public code OR public CAD</li>
          </ul>
          <Guidelines />
        </p>
      </Container>
    </Layout>
  );
}
