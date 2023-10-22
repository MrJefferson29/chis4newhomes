import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Sc2 from "./Sc2";

import i2 from "../../Assets/i7.jpg";
import g6 from "../../Assets/g6.jpg";
import o1 from "../../Assets/o1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styels>
      <Container>
        <Row>
          <Col md="6">
            <Fade left>
              <img
                src={g6}
                className=""
                style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
              />
            </Fade>
          </Col>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade right>
              <p
                style={{
                  padding: "20px",
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  fontFamily: "Gaqire",
                }}
              >
                At Chihuahuas For New Homes, we're all about spreading love, one
                tiny paw at a time. Our mission is simple yet heartwarming: to
                connect these pint-sized pups with loving homes and caring
                families.
              </p>
            </Fade>
            <Fade bottom>
              <Link to="adopt-shelter">
                <button className="bttn">Visit Shelter</button>
              </Link>
            </Fade>
          </Col>
        </Row>

        <Row>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade right>
              <p
                style={{
                  padding: "20px",
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  fontFamily: "Gaqire",
                }}
              >
                Adoption: A Match Made in Heaven Adopting a Chihuahua from us
                isn't just about bringing home a pet; it's about gaining a
                lifelong friend. Our adoption process is designed to ensure that
                every Chihuahua finds the perfect family, and every family finds
                their perfect fur baby. We'll guide you through the process with
                care, answering any questions you may have along the way.
              </p>
            </Fade>
            <Fade bottom>
              <Link to="adopt-shelter">
                <button className="bttn">Visit Shelter</button>
              </Link>
            </Fade>
          </Col>
          <Col>
            <Fade left>
              <img
                src={i2}
                className=""
                style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
              />
            </Fade>
          </Col>
        </Row>
      </Container>
      <Row
        className="5150"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={o1}
          className="imag"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "1px",
            position: "relative",
          }}
        />
        <Fade bottom>
          <div
            style={{
              position: "absolute",
              width: "70vh",
              fontSize: "1.2rem",
              color: "aliceblue",
              fontWeight: "700",
            }}
          >
            <p>
              Support and Community When you adopt from Chihuahua Charm, you're
              joining a community of passionate Chihuahua lovers. We offer
              ongoing support and resources to help you and your new companion
              thrive together. From training tips to health advice, we're here
              to assist you every step of the way.
            </p>

            <Link to="adopt-shelter">
              <button className="bttn">Visit Shelter</button>
            </Link>
          </div>
        </Fade>
      </Row>
      {/* <Container> */}
      <Row style={{ background: "#000", height: "120vh" }}>
        <Col md="7"></Col>
        <Col md="5">
        <Fade right>
          <h2 style={{ color: "aliceblue" }}>
            Changing Lives
            <hr style={{ color: "aliceblue", height: "3px" }} />
          </h2>
          <p
            style={{
              padding: "20px",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "aliceblue",
            }}
          >
            One Wagging Tail at a Time By choosing to adopt, you're not only
            giving a Chihuahua a second chance; you're also enriching your own
            life with unconditional love and endless tail wags. Our website is
            where you'll discover these adorable Chihuahuas in need of forever
            homes. Explore our profiles, fall in love, and embark on a beautiful
            journey of companionship.
          </p>
        </Fade>
        </Col>
        <hr style={{ color: "aliceblue", height: "3px" }} />

        <Col md="6"></Col>
        <Col
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <Fade left>
          <p
            style={{
              padding: "20px",
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "aliceblue",
            }}
          >
            Join the Chihuahua Charm Family Today! Are you ready to open your
            heart and home to a furry friend? We invite you to browse our
            available pups and get to know their stories. Adoption is a
            wonderful way to add a furry family member, and we're here to make
            it a joyful experience. Welcome to our Chihuahua-loving family!
          </p>
        </Fade>
        </Col>
      </Row>
      {/* </Container> */}
      <Sc2 />
    </Styels>
  );
}

const Styels = styled.div`
  overflow-x: hidden;
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 767px) {
    .imag {
      height: 70vh;
    }
  }
`;
