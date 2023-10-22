import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Sc2 from "./Sc2";
import {
  faDog,
  faBone,
  faPaw,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {Slide, Fade, Flip} from 'react-reveal'
import g1 from '../../Assets/g1.jpg';
import g2 from '../../Assets/g2.webp';
import i1 from "../../Assets/i1.jpg";

const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 50px;
  background: aliceblue;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: burlywood;
  padding-right: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Sc1() {
  return (
    <Styles>
      <Container>
        <Row>
          <Col md="5" className="cola">
            <h1 className="brooke">Welcome to Chis 4 New Homes.</h1>
            <p className="stay">
              <Fade left>
              Discover a new furry family member with ease. Here, we specialize
              in delivering bundles of joy to loving homes. Our carefully
              selected puppies are raised with love and care, ensuring they're
              healthy, happy, and ready to become your lifelong companion. Find
              your new best friend tody at Chis For New Homes.
              </Fade>
            </p>
            <Link to='adopt-shelter'><button className="bttn">Visit Shelter</button></Link>
          </Col>
          <Col md="7" className="colb">
            <Fade right>
            <img
              src={i1}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            />
            </Fade>
          </Col>
        </Row>

        <Row>
          <Col md="5">
            <Fade left>
            <div className="fort">
              <div className="num">01</div>
              <Col>
                <font className="brow">
                  Browse our aoptable puppies
                  <br />
                </font>
                <font className="word">
                  Explore our selection of loving and healthy puppies available
                  for adoption. We provide detailed profiles and images of each
                  puppy to help you find your perfect furry companion.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">02</div>
              <Col>
                <font className="brow">
                  Delivery Options
                  <br />
                </font>
                <font className="word">
                  Choose from our delivery options tailored to your preferences.
                  We offer safe and convenient transportation for your puppy to
                  their new forever home.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">03</div>
              <Col>
                <font className="brow">
                  Puppy Care Resources
                  <br />
                </font>
                <font className="word">
                  Access a wealth of resources on puppy care, training tips, and
                  health advice. We're committed to helping you provide the best
                  possible life for your new family member.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">04</div>
              <Col>
                <font className="brow">
                  Stay Connected
                  <br />
                </font>
                <font className="word">
                  Stay updated with our latest puppy arrivals, promotions, and
                  news by subscribing to our newsletter and following us on
                  social media. Be part of our growing puppy-loving community
                </font>
              </Col>
            </div>
            </Fade>
          </Col>
          <Col md="7">
            <div style={{ display: "flex" }}>
            <Fade bottom>
              <img
              className="imag"
                src={g1}
                style={{ width: "50%", padding: "10px", borderRadius: "15px" }}
              />
              </Fade>
              <Fade right>
              <img src={g2} style={{ height: "300px", width: 'auto', paddingTop: '10px', borderRadius: "15px"  }} />
              </Fade>
            </div>
          </Col>
        </Row>

        <Container>
          <IconRow>
            <IconWrapper>
              <FontAwesomeIcon icon={faDog} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faBone} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faPaw} />
            </IconWrapper>
          </IconRow>
        </Container>
      </Container>
      <Sc2 />
    </Styles>
  );
}
const Styles = styled.div`
overflow-x: hidden;
margin-top: 30px;
  .cola {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .brooke {
    font-size: 2.6rem;
    font-family: Hughs;
  }
  .stay {
    margin-top: 20px;
    font-size: 1.3rem;
    font-weight: 500;
  }
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
  .num {
    font-size: 3.7rem;
    font-weight: 600;
    margin-right: 15px;
    margin-top: 7px;
    color: burlywood;
    font-family: Gaqire;
  }
  .fort {
    display: flex;
    margin: 50px;
  }
  .brow {
    font-family: Gaqire;
    font-size: 1.6rem;
    font-weight: 700;
    color: burlywood;
  }
  .word {
    font-size: 1.15rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 860px) {
    .imag {
        display: none;
    }
    `;
