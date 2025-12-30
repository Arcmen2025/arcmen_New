import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TopBar = ({ image = "/default-logo.png", paramsData }) => {
  return (
    <section style={{ position: 'relative', width: "100%", height: "20rem", overflow: 'hidden' }}>
      <Image
        src={image}
        alt="Company Logo"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(93deg, rgba(213,137,209,0) 9%, rgba(18,25,36,1) 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container fluid style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <Row>
          <Col>
            <h1 style={{ fontSize: '2rem', fontWeight: "600" }}>
              {paramsData.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <h4>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> | {paramsData.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

TopBar.propTypes = {
  image: PropTypes.string,
  paramsData: PropTypes.string.isRequired,
};

export default TopBar;


