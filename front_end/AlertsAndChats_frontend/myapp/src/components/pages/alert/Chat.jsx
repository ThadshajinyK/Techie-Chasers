import React, { useState } from "react";
import { Badge, Button, Col, ListGroup } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Girl from "../../images/girl.png";
import MoreInformation from "./MoreInformation";

const chatData = [
  {
    id: 1,
    title: "Ajith",
    body: "Cras justo odio",
    isNew: true,
  },
  {
    id: 2,
    title: "Raja",
    body: "Cras justo odio",
    isNew: false,
  },
  {
    id: 3,
    title: "Rosi",
    body: "Cras justo odio",
    isNew: false,
  },
];

function Chat() {
  const [selectIndex, setSelectIndex] = useState(chatData[0]);
  const [isMore, setIsMore] = useState(false);
  const onClick = (data) => {
    setSelectIndex(data);
  };
  return (
    <Container>
      {!isMore ? (
        <div>
          <Row>
            <Col md={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                Chats
              </div>
            </Col>
            <Col md={8}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-start align-items-start"
                style={{
                  margin: "3px",
                  background: "#ebe7e6",
                  cursor: "pointer",
                  height: "50px",
                  padding: "3px",
                }}
              >
                <div>
                  <div class="avatar-chart">
                    <img src={Girl} alt="avatar" class="avatar-img" />
                  </div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{selectIndex.title}</div>
                  <div style={{ color: "green", fontSize: "12px" }}>Online</div>
                </div>
              </ListGroup.Item>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <ListGroup as="ol">
                {chatData.map((post, index) => {
                  return (
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-start align-items-start"
                      style={{
                        margin: "3px",
                        background:
                          selectIndex.id === post.id ? "#fce7e3" : "#fff",
                        cursor: "pointer",
                        padding: "10px",
                      }}
                      onClick={() => onClick(post)}
                    >
                      <div>
                        <div class="avatar-chart">
                          <img src={Girl} alt="avatar" class="avatar-img" />
                        </div>
                      </div>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{post.title}</div>
                        {post.body}
                      </div>
                      {post.isNew && (
                        <Badge bg="primary" pill>
                          New
                        </Badge>
                      )}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <Col md={8}>
              <div style={{ minHeight: "20rem" }}>
                {[1, 2].map((post, index) => {
                  return (
                    <div style={{ marginTop: 20 }} key={index}>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-start align-items-start"
                        style={{
                          margin: 0,
                          background: "#36b5bd",
                          cursor: "pointer",
                          height: "30px",
                          padding: 0,
                        }}
                      >
                        <div
                          className="ms-2 me-auto"
                          style={{ paddingLeft: "10px" }}
                        >
                          {post}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-start align-items-start"
                        style={{
                          margin: 0,
                          background: "#ceeded",
                          cursor: "pointer",
                          height: "40px",
                          padding: 0,
                        }}
                      >
                        <div
                          className="ms-2 me-auto"
                          style={{
                            paddingLeft: "10px",
                            fontSize: "14px",
                            marginTop: 5,
                          }}
                        >
                          Why didn’t you solve this issue?
                        </div>
                      </ListGroup.Item>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <MoreInformation />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            setIsMore(!isMore);
          }}
        >
          {isMore ? "Back" : "More"}
        </Button>
      </div>
    </Container>
  );
}

export default Chat;
