import React from "react";
import logo from "../images/logo/nobg.svg";

export default function Navbar(): JSX.Element {
  const logoSize = 48;
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      style={
        {
          // backgroundColor: "#202020",
        }
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt=""
            width={logoSize}
            height={logoSize}
            className="d-inline-block align-middle"
          />
          <span className="h3 align-middle oa text-white">
            The Open Alliance
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-middle"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link link-light" href="#">
              Join
            </a>
            <a className="nav-link link-light" href="#">
              2021-22 Teams
            </a>
            <a className="nav-link link-light" href="#">
              2022-23 Teams
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
