import React from "react";
import "../scss/Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profileImage from "../assets/Spring_SGA_Arms_Tina.png";

function Home() {
  return (
    <>
      <Container fluid id="landing-background" className="text-light py-5">
        <div className="text-center">
          <Image
            src={profileImage}
            roundedCircle
            fluid
            className="profileImage mt-3"
          />
          <div className="introduction m-5">
            <h1 className="mb-3 bold text-white">Hello, I'm Dongyoung.</h1>
            <h2 className="mb-3">
              A Computer Science major / Game Design & Dev minor at the
              University of Arizona.
            </h2>
            <h2 className="mb-5">
              Passionate about front-end web development with a touch of backend
              knowledge.
            </h2>
          </div>
        </div>

        <Container>
          <Row>
            <Col md={12} lg={4} className="text-start">
              <h3 className="bold mb-3 text-primary">Biography</h3>
              <p className="mb-2">
                <span className="bold">University of Arizona</span>
              </p>
              <p className="mb-2">
                B.A. in Computer Science, Minor in Game Design & Dev
              </p>
              <p className="mb-2">
                <span className="bold">GPA:</span> 4.00/4.00
              </p>
              <p className="mb-2">
                <span className="bold">Expected Graduation:</span> May 2026
              </p>
            </Col>

            <Col md={12} lg={4} className="text-start">
              <h3 className="bold mb-3 text-info">Skills</h3>
              <p className="mb-2">
                <span className="bold">Frontend:</span> JavaScript, HTML, CSS,
                SCSS, Bootstrap, React
              </p>
              <p className="mb-2">
                <span className="bold">Backend:</span> Node.js, Express.js,
                MongoDB, SQL
              </p>
              <p className="mb-2">
                <span className="bold">Database & CMS:</span> MySQL, MongoDB
              </p>
              <p className="mb-2">
                <span className="bold">Tools & Platforms:</span> AWS,
                DigitalOcean, Google Sheets, Word, Excel
              </p>
              <p className="mb-2">
                <span className="bold">Game Development:</span> Unity, C#
              </p>
              <p className="mb-2">
                <span className="bold">Other Languages:</span> Java
              </p>
            </Col>

            <Col md={12} lg={4} className="text-start">
              <h3 className="bold mb-3 text-warning">Experience</h3>
              <p className="mb-2">
                <span className="bold">
                  Student Special Events Parking Monitor:
                </span>{" "}
                University of Arizona Parking and Transportation
              </p>
              <p className="mb-2">
                <span className="bold">
                  Professional Esports Player / Coach:
                </span>{" "}
                SGA Incheon
              </p>
              <p className="mb-2">
                <span className="bold">Military Service:</span> Anyang Manan
                Police Station
              </p>
              <p className="mb-2">
                <span className="bold">Projects:</span> Web & Game Development
                (Check my Github!)
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
