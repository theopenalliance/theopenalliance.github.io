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
          We encourage your team to register to be officially recognized as an
          Open Alliance team. Post content utilizing #openalliance and register
          via the following form:
        </p>
        <p>
          <a href="https://forms.gle/JkJqjR3oL8oG6m1r8">
            https://forms.gle/JkJqjR3oL8oG6m1r8
          </a>
        </p>
        <p>
          <h1>Guidelines</h1>
          <Guidelines />
        </p>
      </Container>
    </Layout>
  );
}
