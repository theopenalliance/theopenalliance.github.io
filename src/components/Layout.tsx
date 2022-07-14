import React from "react";
import Navbar from "./Navbar";
import "../styles.scss";
import { Container } from "react-bootstrap";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
    </>
  );
}
