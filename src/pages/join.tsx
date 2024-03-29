import React from "react";
import { Helmet } from "react-helmet";
import Guidelines from "../components/Guidelines";
import Layout from "../components/Layout";

export default function Join(props: {}): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>Join | The Open Alliance</title>
      </Helmet>

      <br />

      <h1 className="text-3xl font-extrabold sm:text-5xl font-display py-4">
        Joining The Open Alliance
      </h1>
      <p>
        Thank you for your interest in having your team be part of The Open
        Alliance. Registration for the 2024 season is currently closed.
        Registration for the 2025 season will open in the fall of 2024.
      </p>
      {/* <p>
        We encourage your team to register to be officially recognized as an
        Open Alliance team. Post content utilizing #openalliance and register
        via the following form:
      </p>
      <p>
        <a href="https://forms.gle/JkJqjR3oL8oG6m1r8" className="text-blue-500">
          https://forms.gle/JkJqjR3oL8oG6m1r8
        </a>
      </p> */}
      <p>
        <Guidelines />
      </p>
    </Layout>
  );
}
