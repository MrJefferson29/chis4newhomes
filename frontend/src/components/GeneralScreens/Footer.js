import React from "react";
import styled from "styled-components";
import "../../Css/Footer.css";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Styles>
      <Container style={{ padding: "65px" }}>
        <Row>
          <Col md="3">
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </Col>
          <center>
            <Col md="9">
              <font
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "600",
                  matginBottom: "25px",
                }}
              >
                Chis For New Homes
              </font>
            </Col>
          </center>
        </Row>
        <Row>
          <Col md="4">
            <center>
              <div style={{ color: "burlywood" }}>
                <p
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: "200",
                    color: "white",
                  }}
                >
                  Location
                </p>
                <p style={{ fontSize: "1.2rem" }}>17 Lexington st, Soho</p>
                <p style={{ fontSize: "1.2rem" }}>London, UK</p>
              </div>
            </center>
          </Col>
          <Col md="4">
            <center>
              <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Contact</p>
              <p style={{ fontSize: "1.2rem", color: "burlywood" }}>
                📞 +44 7418349703
              </p>
              <NavLink
                to="mailto:chis4newhomes2011@gmail.com"
                className="lin"
                style={{ fontSize: "1.2rem", color: "burlywood" }}
              >
                ✉️ chis4newhomes2011@gmail.com
              </NavLink>
            </center>
          </Col>
          <Col md="4">
            <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Join Us</p>
            <NavLink
              to="https://www.facebook.com/chis4newhomes?mibextid=ZbWKwL"
              className="lin"
              style={{
                fontSize: "1.2rem",
                color: "burlywood",
                borderBottom: "2px solid burlywood",
                padding: "2px",
                width: "auto",
                margin: "10px",
              }}
            >
              Facebook
            </NavLink>
            <NavLink
              to="#"
              className="lin"
              style={{
                fontSize: "1.2rem",
                color: "burlywood",
                borderBottom: "2px solid burlywood",
                padding: "2px",
                width: "auto",
                margin: "10px",
              }}
            >
              Customer Support
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  background: black;
  color: white;
  .IconWrapper {
    width: auto;
    font-size: 56px;
    color: burlywood;
    padding-right: 20px;
    transition: transform 0.2s ease;
  }
`;
