import React, { CSSProperties } from "react";
import { Helmet } from "react-helmet";
import Guidelines from "../components/Guidelines";
import Layout from "../components/Layout";
import logo from "../images/logo/darkbg.png";
import "flowbite";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>The Open Alliance</title>
      </Helmet>

      {/* <section className="">
        <div className="mx-auto px-4 py-8 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl font-display">
              The Open Alliance
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              The Open Alliance is a group of teams that openly share designs,
              code, and processes. The goal of The Open Alliance is to foster a
              culture of collaboration and innovation within FIRST.
            </p>
          </div>
        </div>
      </section> */}

      <div className="px-4 py-8 flex items-center">
        <img
          src={logo}
          className="col-span-1 aspect-square w-auto max-h-48"
          loading="lazy"
        />
        <div className="col-span-2 flex-grow-1 px-4">
          <h1 className="text-3xl font-extrabold sm:text-5xl font-display py-4">
            The Open Alliance
          </h1>
          <p className="">
            The Open Alliance is a group of teams that openly share designs,
            code, and processes. The goal of The Open Alliance is to foster a
            culture of collaboration and innovation within FIRST.
          </p>
        </div>
      </div>

      <Guidelines />

      <h1 className="text-3xl font-extrabold sm:text-5xl font-display pt-8 pb-2">
        Get Involved
      </h1>

      <div className="flex items-center">
        <div>
          <h5 className="text-xl font-bold font-display">
            The Open Alliance Show
          </h5>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              className="responsive-iframe"
              src="https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y8bSo4O4hUBKgyL9e5uscD3"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="vstack gap-2 flex-grow px-4">
          <div className="grid grid-cols-1">
            <a href="/join">
              <button
                type="button"
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Join The Open Alliance
              </button>
            </a>
            <a href="https://www.chiefdelphi.com/tag/openalliance">
              <button
                type="button"
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                #openalliance on ChiefDelphi
              </button>
            </a>
            <button
              type="button"
              disabled
              style={
                {
                  "-webkit-touch-callout": "text",
                  "-webkit-user-select": "text",
                  "-khtml-user-select": "text",
                  "-moz-user-select": "text",
                  "-ms-user-select": "text",
                  "user-select": "text",
                } as CSSProperties
              }
              className="text-white bg-blue-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Open Alliance Discord Code: qAw6NtRTwC
            </button>
          </div>
        </div>
      </div>

      {/* <Container className="container col-xxl-10 px-4 py-5">
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
            <h5>The Open Alliance Show</h5>
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
              <button
                type="button"
                className="btn btn-secondary"
                disabled
                style={
                  {
                    "-webkit-touch-callout": "text",
                    "-webkit-user-select": "text",
                    "-khtml-user-select": "text",
                    "-moz-user-select": "text",
                    "-ms-user-select": "text",
                    "user-select": "text",
                  } as CSSProperties
                }
              >
                Open Alliance Discord Code: qAw6NtRTwC
              </button>
            </div>
          </div>
        </Row>
      </Container> */}
    </Layout>
  );
}
