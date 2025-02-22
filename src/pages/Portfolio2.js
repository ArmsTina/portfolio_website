import React from "react";
import "../scss/Portfolio.css";
import Image from "react-bootstrap/Image";
import portfolioImage1 from "../assets/portfolio2-1.png";
import portfolioImage2 from "../assets/portfolio2-2.png";
import portfolioImage3 from "../assets/portfolio2-3.png";
import {
  Carousel,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

export default function Portfolio2({ darkMode }) {
  return (
    <div className="background portfolio">
      <Container fluid className="p-5">
        <Row className="d-flex v-center">
          <Col md={12} lg={7}>
            <Carousel fade className="animated">
              <Carousel.Item>
                <Image
                  src={portfolioImage1}
                  rounded
                  fluid
                  alt="Portfolio 2 Game Page"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Game Page</h3>
                  <p>Interactive game interface for the Wordle platform.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={portfolioImage2}
                  rounded
                  fluid
                  alt="Portfolio 2 Leaderboard Page"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Leaderboard</h3>
                  <p>Displays top player scores with real-time updates.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={portfolioImage3}
                  rounded
                  fluid
                  alt="Portfolio 2 Account Setting Page"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Account Setting</h3>
                  <p>
                    Allows users to manage profiles and secure password changes.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={12} lg={5} className="mt-lg-0 mt-5">
            <Card
              className={`animated explaination shadow-sm ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <Card.Body className="p-4">
                <Card.Title className="bold">Wordle Game Website</Card.Title>
                <Card.Subtitle className="mb-3">
                  CSC 337 Final Group Project
                </Card.Subtitle>
                <Card.Text className="text-start">
                  Leading the development for this CSC 337 project at the
                  University of Arizona, I built the backend with Express.js and
                  MongoDB, and provided key revisions to the React frontend,
                  collaborating with Akhond (Frontend) and Wardah (Design).
                </Card.Text>
                <Card.Text className="text-start bold">Key Features:</Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>🗃️ User Authentication</ListGroup.Item>
                  <ListGroup.Item>🎮 Game State Management</ListGroup.Item>
                  <ListGroup.Item>🏆 Leaderboard Management</ListGroup.Item>
                  <ListGroup.Item>🛠️ Static File Hosting</ListGroup.Item>
                </ListGroup>
                <Card.Text className="text-start bold mt-3">
                  Technologies Used:
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    ⚛️ React: Dynamic UI rendering.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🛤️ React Router: Smooth navigation.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🌐 Node.js: Runtime environment for JavaScript.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📚 Express.js: Web framework for handling routes and
                    middleware.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🍃 MongoDB: NoSQL database for storing user data and game
                    state.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🔐 Passport.js: Authentication middleware for handling login
                    and sessions.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🔒 bcrypt: Library for hashing passwords.
                  </ListGroup.Item>
                </ListGroup>

                <Card.Text className="text-start bold mt-3">
                  Project Contributions:
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    📋 Leading and Developing a platform for Wordle, featuring
                    dynamic game state management and leaderboards.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🚀 Building backend services with Express and managing
                    game/user data with MongoDB.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🌐 Deploying the webpage on DigitalOcean, securing it with
                    HTTPS and implementing password security using bcrypt.
                  </ListGroup.Item>
                </ListGroup>

                <div className="mt-4 d-flex gap-2">
                  <Button
                    variant="primary"
                    href="https://csc337final.duckdns.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌍 View Live Site
                  </Button>
                  <Button
                    variant={`${darkMode ? "outline-light" : "outline-dark"}`}
                    href="https://github.com/ArmsTina/337_Final_Public/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 GitHub Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
