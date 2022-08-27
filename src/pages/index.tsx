import React from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import logo from "../images/logo/darkbg.png";

export default function Index(): JSX.Element {
  const guidelines: (JSX.Element | String)[] = [
    "Open Alliance teams don't keep secrets.",
    "Open Alliance teams do their best to share updates at least once a week.",
    "Open Alliance teams primarily post updates to ChiefDelphi.",
    "Open Alliance teams provide open CAD and/or open code.",
    "Open Alliance teams include the bad with the good.",
    "Open Alliance teams join to help everyone - not just other Open Alliance teams.",
  ];

  return (
    <Layout>
      <Helmet>
        <title>The Open Alliance</title>
      </Helmet>
      <Container className="container col-xxl-10 px-4 py-5">
        <Row className="row g-5 py-5 align-items-center">
          <div className="col-md-auto">
            <img
              src={logo}
              className=""
              alt="OA Logo"
              width="250"
              height="250"
              loading="lazy"
            />
          </div>
          <div className="col">
            <h1 className="display-5 fw-bold lh-1 mb-3 oa">
              The Open Alliance
            </h1>
            <p className="lead">
              The Open Alliance is a group of teams that openly share designs,
              code, and processes. The goal of The Open Alliance is to foster a
              culture of collaboration and innovation within FIRST.
            </p>
          </div>
        </Row>
      </Container>
      <Container className="container px-4 pb-5">
        <h1 className="fw-bold mb-3 px-0">Guidelines</h1>
        {guidelines.map((gl, idx) => (
          <div>
            {idx + 1}. {gl}
          </div>
        ))}
      </Container>
      <Container className="container">
        <h1 className="fw-bold px-0">Get Involved</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y8bSo4O4hUBKgyL9e5uscD3"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      todo:
      <ul>
        <li>CD search for #openalliance</li>
        <li>discord link</li>
      </ul>
    </Layout>
  );
}
