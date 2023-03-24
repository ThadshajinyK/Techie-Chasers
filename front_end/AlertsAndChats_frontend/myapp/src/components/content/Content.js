import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

import { Routes, Route, Outlet, Link } from "react-router-dom";

function Content(props) {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": props.isOpen })}
    >
      <NavBar toggle={props.toggle} />
      <div className="body-content">
        <Outlet />
      </div>
    </Container>
  );
}

export default Content;
