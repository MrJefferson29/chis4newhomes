import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Fade } from 'react-reveal';
import g3 from '../../Assets/g3.jpg';
import g4 from '../../Assets/g4.jpg';
import g5 from '../../Assets/g5.jpg';

export default function Sc2() {
  return (
    <Styles>
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: '50px'
          }}
        >
          <center>
            <Fade top>
            <h2 style={{fontFamily: 'Hughs', fontSize: '2.5rem'}}>Why Trust Us??</h2>
            <Col md='6'
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              At Chis 4 New Homes, we understand that choosing a new furry
              family member is a significant decision. We're here to make that
              decision easier and more joyful than ever. With a deep passion for
              connecting loving homes with adorable Chihuahuas, we stand out as
              your trusted partner in this heartwarming journey.
            </Col>
            </Fade>
          </center>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col md="4">
            <Fade bottom>
            <h2 style={{fontFamily: 'Gaqire'}}>Unparalleled Care and Commitment</h2>
            </Fade>
            <Fade left>
            <img src={g3} style={{width: '100%', height: 'auto', borderRadius: '10px'}} />
            </Fade>
            <Fade bottom>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                marginTop: "30px",
              }}
            >
              What sets us apart is our unwavering commitment to the well-being
              of each and every puppy that comes into our care. Our experienced
              team of puppy enthusiasts goes above and beyond to ensure that our
              pups are healthy, happy, and ready to fill your life with
              boundless joy. We believe in quality over quantity, and we take
              the time to provide personalized care, socialization, and early
              training to our puppies.
            </p>
            </Fade>
          </Col>

          <Col md="4">
            <Fade bottom>
            <h2 style={{fontFamily: 'Gaqire'}}>The Perfect Match for Every Family</h2>
            </Fade>
            <Fade top>
            <img src={g5} style={{width: '100%', height: 'auto', borderRadius: '10px'}} />
            </Fade>

              <Fade bottom>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                marginTop: "30px",
              }}
            >
              We understand that every family is unique, and so are our puppies.
              Our adoption process is designed to create the perfect match. Our
              dedicated team takes the time to get to know you, your lifestyle,
              and your preferences to help you find the puppy that complements
              your family and lifestyle perfectly. Whether you're looking for a
              playful companion or a snuggle buddy, we have a wide range of
              personalities to choose from.
            </p>
            </Fade>
          </Col>

          <Col md="4">
            <Fade bottom>
            <h2 style={{fontFamily: 'Gaqire'}}>A Lifetime of Support and Joy</h2>
            </Fade>
            <Fade right>
            <img src={g4} style={{width: '100%', height: 'auto', borderRadius: '10px'}} />
            </Fade>
            <Fade bottom>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                marginTop: "30px",
              }}
            >
              Our commitment to you doesn't end with the adoption. We're here
              for you throughout your puppy's life journey. From training tips
              and health advice to a supportive community of fellow puppy
              parents, we're your trusted resource every step of the way. We're
              honored to be a part of your puppy's story and will continue to
              provide guidance and support whenever you need it.
            </p>
            </Fade>
          </Col>
        </Row>
        <Row style={{padding: '50px'}}>
          <center>
            <Fade bottom>
            <h2 style={{fontFamily: 'Hughs'}}>Join The Chis For New Homes Community</h2>
            <Col md='6'
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              Choosing us means choosing a family that cares deeply about the
              happiness and well-being of both our puppies and the families who
              adopt them. Our mission is to make the adoption process as
              seamless and heartwarming as possible. We invite you to explore
              our available puppies, fall in love, and embark on a beautiful
              journey of companionship. Let's make memories together, one
              wagging tail at a time.
            </Col>
            </Fade>
          </center>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 15vh;
`;
