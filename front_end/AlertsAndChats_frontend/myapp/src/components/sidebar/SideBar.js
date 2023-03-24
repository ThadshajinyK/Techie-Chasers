import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import Logo from "../images/eleos_logo.png";
import Girl from "../images/girl.png";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <div class="logo-area">
            <img src={Logo} class="logo" alt="logo" />

            <span style={{ color: "black" }}>Eleos Web (pvt) Ltd</span>
          </div>
        </div>
        <div style={{ height: "40px" }}></div>
        <Nav className="flex-column pt-2">
          <Nav.Item className="sidebar-nav-item">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>

          <div class="nav-item-gap" />

          <Nav.Item className="sidebar-nav-item">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Server
            </Nav.Link>
          </Nav.Item>
          <div class="nav-item-gap" />
          <Nav.Item className="sidebar-nav-item">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Apps
            </Nav.Link>
          </Nav.Item>
          <div class="nav-item-gap" />
          <Nav.Item className="sidebar-nav-item-active">
            <NavLink className="side-bar-nav-link" to={"/alert"}>
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              Alerts
            </NavLink>
          </Nav.Item>
          <div class="nav-item-gap" />
          <Nav.Item className="sidebar-nav-item">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Setting
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
