import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, InputGroup, Form } from "react-bootstrap";
import Girl from "../images/girl.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="#36b5bd"
        className="navbar shadow-sm rounded"
        expand
        style={{ background: "#36b5bd" }}
      >
        <Button variant="outline-info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link href="#">
              <div style={{ height: "30px", marginTop: "5px" }}>
                <InputGroup className="mb-3" size="sm">
                  <Form.Control
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    id="button-addon2"
                    style={{ color: "black" }}
                  >
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div class="setting-area">
                <div class="avatar">
                  <img src={Girl} alt="avatar" class="avatar-img" />
                </div>
                <div class="user-info">
                  <div class="name">Mareenraj</div>
                  <span class="username">mareen7@gamil.com</span>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
