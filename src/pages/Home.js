import { React } from "react";
import "../scss/Home.css";
import { ListGroup, Container, Row, Col, Image, Card } from "react-bootstrap";
import profileImage from "../assets/Spring_SGA_Arms_Tina.png";

export default function Home({ darkMode }) {
  return (
    <div id="home-background" className="background">
      <Container fluid>
        <div className="text-center animated">
          <Image
            src={profileImage}
            roundedCircle
            fluid
            className="profileImage mt-3"
          />
          <div className="introduction m-5">
            <h1 className="mb-3 bold">Hello, I'm Dongyoung.</h1>
            <h2 className="mb-3">
              A Computer Science major / Game Design & Dev minor at the
              University of Arizona.
            </h2>
            <h2 className="mb-3">
              Passionate about front-end web development with a touch of backend
              knowledge.
            </h2>
          </div>
        </div>
      </Container>
      <Container className="mb-3 animated-delay">
        <Row>
          <Col md={12} lg={4} className="mt-lg-0 mt-4">
            <Card
              className={`shadow-sm ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              <Card.Body className="p-4">
                <Card.Title className="fw-bold text-primary">
                  Biography
                </Card.Title>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    <span className="bold">University of Arizona</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    B.A. in Computer Science, Minor in Game Design & Dev
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">GPA:</span> 4.00/4.00
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Expected Graduation:</span> May 2026
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} lg={4} className="mt-lg-0 mt-4">
            <Card
              className={`shadow-sm ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              <Card.Body className="p-4">
                <Card.Title className="fw-bold text-info">Skills</Card.Title>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    <span className="bold">Frontend:</span> JavaScript, HTML,
                    CSS, SCSS, Bootstrap, React
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Backend:</span> Node.js, Express.js,
                    MongoDB, SQL
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Database & CMS:</span> MySQL, MongoDB
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Tools & Platforms:</span> AWS,
                    DigitalOcean, Google Sheets, Word, Excel
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Game Development:</span> Unity, C#
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Other Languages:</span> Java
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} lg={4} className="mt-lg-0 mt-4">
            <Card
              className={`shadow-sm ${darkMode ? "dark-mode" : "light-mode"}`}
            >
              <Card.Body className="p-4">
                <Card.Title className="fw-bold text-warning">
                  Experience
                </Card.Title>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    <span className="bold">
                      Student Special Events Parking Monitor:
                    </span>{" "}
                    University of Arizona Parking and Transportation
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">
                      Professional Esports Player / Coach:
                    </span>{" "}
                    SGA Incheon
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Military Service:</span> Anyang Manan
                    Police Station
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Projects:</span> Web & Game
                    Development (Check my{" "}
                    <a
                      href="https://github.com/ArmsTina"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github!
                    </a>
                    )
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
