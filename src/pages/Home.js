import { React } from "react";
import "../scss/Home.css";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import profileImage from "../assets/Spring_SGA_Arms_Tina.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPencil, faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function Home({ darkMode }) {
  return (
    <div
      id="home-background"
      className={`background ${darkMode ? "background-dark" : ""}`}
    >
      <Container fluid className="mt-5">
        <div className="animated">
          <Image
            src={profileImage}
            rounded
            fluid
            className="profileImage mt-3"
            alt="Profile Picture of Dongyoung"
          />
          <div className={`introduction mt-4 mb-4 mt-lg-5 mb-lg-5 text-white`}>
            <h1 className="mb-3 p-3 bold">Hello, I'm Dongyoung</h1>
            <h2 className="mb-3">
              A Computer Science major with a Game Design and Development minor
              at the University of Arizona.
            </h2>
            <h2 className="mb-5">
              I'm passionate about front-end web development and also dabble
              with backend technologies.
            </h2>
            <Button
              variant={`${darkMode ? "dark" : "light"}`}
              href="/contact"
              className="button-Home"
            >
              ✉️ Contact Me
            </Button>
          </div>
        </div>
      </Container>
      <Container fluid className="mt-3 mb-5 animated-delay">
        <Row>
          <Col md={12} xl={4} className="mt-xl-0 mt-4 center">
            <Card
              className={`roundCard shadow-sm ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <Card.Body className="p-4">
                <FontAwesomeIcon
                  icon={faBook}
                  className={`card-icon-light ${
                    darkMode ? "card-icon-dark" : ""
                  }`}
                />
                <Card.Title className="bold cardTitle">Biography</Card.Title>
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

          <Col md={12} xl={4} className="mt-xl-0 mt-5 center">
            <Card
              className={`roundCard shadow-sm ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <Card.Body className="p-4">
                <FontAwesomeIcon
                  icon={faPencil}
                  className={`card-icon-light ${
                    darkMode ? "card-icon-dark" : ""
                  }`}
                />
                <Card.Title className="bold cardTitle text-green">
                  Skills
                </Card.Title>
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
                    <span className="bold">Database:</span> MySQL, MongoDB
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="bold">Tools & Platforms:</span> Git, Github
                    AWS, DigitalOcean, Google Sheets, MSOffice
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

          <Col md={12} xl={4} className="mt-xl-0 mt-5 center">
            <Card
              className={`roundCard shadow-sm ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <Card.Body className="p-4">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className={`card-icon-light ${
                    darkMode ? "card-icon-dark" : ""
                  }`}
                />
                <Card.Title className="bold cardTitle text-green">
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
