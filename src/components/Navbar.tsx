import React from "react";
import logo from "../images/logo/nobg.svg";

import { Navbar } from "flowbite-react";

export default function Navbar_(): JSX.Element {
  return (
    <Navbar fluid rounded className="bg-gray-900">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9 " alt="OA logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white font-display">
          The Open Alliance
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/join" className="text-white">
          Join
        </Navbar.Link>
        <Navbar.Link href="/teams/2024" className="text-white">
          2024 Teams
        </Navbar.Link>
        <Navbar.Link href="/teams/2023" className="text-white">
          2023
        </Navbar.Link>
        <Navbar.Link href="/teams/2022" className="text-white">
          2022
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
