import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Guidelines from "../components/Guidelines";
import Layout from "../components/Layout";
import logo from "../images/logo/darkbg.png";

export default function Index(): JSX.Element {
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
        <Guidelines />
      </Container>
      <Container className="container">
        <h1 className="fw-bold px-0">Get Involved</h1>

        <Row>
          <div className="col-sm">
            <h5>FIRST Updates Now content</h5>
            <div className="iframe-container">
              <iframe
                // width="560"
                // height="315"
                className="responsive-iframe"
                src="https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y8bSo4O4hUBKgyL9e5uscD3"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="vstack gap-2 ">
              <a href="/join" className="btn btn-primary">
                Join The Open Alliance
              </a>
              <a
                href="https://www.chiefdelphi.com/tag/openalliance"
                className="btn btn-primary"
              >
                #openalliance on ChiefDelphi
              </a>
              <a
                href="https://discord.gg/qAw6NtRTwC"
                className="btn btn-secondary"
              >
                Open Alliance Discord
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
}
