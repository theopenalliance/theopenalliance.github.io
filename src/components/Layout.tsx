import React from "react";
import Navbar from "./Navbar";
import "../styles.scss";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">{props.children}</div>
    </>
  );
}
