import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AlertData from "./AlertData";
import Chat from "./Chat";

function Alert() {
  const [key, setKey] = useState("profile");

  return (
    <Tabs
      id="noanim-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="From Servers">
        <div className="containtor-flex-start">
          <Card
            style={{
              height: "6rem",
              width: "14rem",
              margin: "1rem",
              borderRadius: "10px",
              background: "#e3fafc",
              boxShadow: "5px 5px #f2f2f2",
            }}
          >
            <Card.Body>
              <Card.Title>Views</Card.Title>
              <Card.Text
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                100
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              height: "6rem",
              width: "14rem",
              margin: "1rem",
              borderRadius: "10px",
              background: "#e3fafc",
              boxShadow: "5px 5px #f2f2f2",
            }}
          >
            <Card.Body>
              <Card.Title>Not Seen</Card.Title>
              <Card.Text
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                50
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <AlertData />
        </div>
      </Tab>
      <Tab eventKey="profile" title="From Client">
        <Chat />
      </Tab>
    </Tabs>
  );
}

export default Alert;
