import React from "react";
import gitHubMark from "./images/GitHubMark.png";
import { Image, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar bg="light" expand="lg" fluid>
      <a href="https://github.com/Crushellini/PhotoTracer" className="mr-sm-2">
        <Image src={gitHubMark} />
      </a>
      <div className="mr-sm-2"> Jeremy Alcanzare </div>
    </Navbar>
  );
}
