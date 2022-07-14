import React from "react";
import Navbar from "./Navbar";
import "../styles.scss";
import "bootstrap";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="container">{props.children}</div>
    </>
  );
}
