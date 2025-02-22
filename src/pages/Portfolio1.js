import React from "react";
import "../scss/Portfolio.css";
import Image from "react-bootstrap/Image";
import portfolioImage1 from "../assets/portfolio1-1.png";
import portfolioImage2 from "../assets/portfolio1-2.png";
import portfolioImage3 from "../assets/portfolio1-3.png";
import {
  Carousel,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

export default function Portforlio1({ darkMode }) {
  return (
    <div className="background portfolio">
      <Container fluid className="p-5">
        <Row className="d-flex v-center">
          <Col md={12} lg={7}>
            <Carousel fade className="animated">
              <Carousel.Item>
                <Image src={portfolioImage1} rounded fluid />
                <Carousel.Caption className="caption-background">
                  <h3>Home Page</h3>
                  <p>
                    Built with a fully responsive layout, ensuring optimal
                    viewing on all devices.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={portfolioImage2} rounded fluid />
                <Carousel.Caption className="caption-background">
                  <h3>Google Maps Integration</h3>
                  <p>
                    Implements the Google Maps API to display interactive
                    location data.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={portfolioImage3} rounded fluid />
                <Carousel.Caption className="caption-background">
                  <h3>Reservation Form</h3>
                  <p>
                    A robust reservation form featuring client-side validation
                    using Yup and Formik.
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
                <Card.Title className="bold">Little Lemon Website</Card.Title>
                <Card.Subtitle className="mb-3">
                  Meta Frontend Capstone Project
                </Card.Subtitle>
                <Card.Text className="text-start">
                  A conceptual capstone project for the Meta Front-End Developer
                  Course, illustrating the Little Lemon restaurant. Includes a
                  user-friendly interface for exploring the menu, making
                  reservations, and placing online orders (design only).
                </Card.Text>

                <Card.Text className="text-start bold">Key Pages:</Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    🏠 Home: Welcoming introduction to Little Lemon.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📖 About: Learn about the history and team.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🍽️ Menu: Explore the food and drink options.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📅 Reservations: Book a table online.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🛒 Online Orders: Place an order for delivery.
                  </ListGroup.Item>
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
                    🎨 CSS: Responsive design with custom styles.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🗺️ Google Map API: Interactive map integration.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📝 Formik: For efficient form handling.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    ✅ Yup: For robust form validation.
                  </ListGroup.Item>
                </ListGroup>

                <div className="mt-4 d-flex gap-2">
                  <Button
                    variant="primary"
                    href="https://dylittlelemon.netlify.app/"
                    target="_blank"
                  >
                    🌍 View Live Site
                  </Button>
                  <Button
                    variant={`${darkMode ? "outline-light" : "outline-dark"}`}
                    href="https://github.com/ArmsTina/meta_front_capstone"
                    target="_blank"
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
