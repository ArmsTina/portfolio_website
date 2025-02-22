import React from "react";
import "../scss/Portfolio.css";
import Image from "react-bootstrap/Image";
import portfolioImage1 from "../assets/portfolio3-1.png";
import portfolioImage2 from "../assets/portfolio3-2.png";
import portfolioImage3 from "../assets/portfolio3-3.png";
import {
  Carousel,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

export default function Portfolio3({ darkMode }) {
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
                  alt="Portfolio 3 Home"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Responsive Webpage</h3>
                  <p>
                    Clean, responsive design with animations and a dark/light
                    mode toggle.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={portfolioImage2}
                  rounded
                  fluid
                  alt="Portfolio 3 Portfolio Page"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Portfolio Showcase</h3>
                  <p>
                    Detailed project descriptions with images, GitHub links, and
                    live demos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={portfolioImage3}
                  rounded
                  fluid
                  alt="Portfolio 3 Contact Page"
                />
                <Carousel.Caption className="caption-background">
                  <h3>Get in Touch</h3>
                  <p>
                    Contact me via the form or email at didehddud1005@gmail.com.
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
                <Card.Title className="bold">My Portfolio Website</Card.Title>
                <Card.Subtitle className="mb-3">
                  Well, you are here!
                </Card.Subtitle>
                <Card.Text className="text-start">
                  This website serves as my personal portfolio, designed to
                  highlight my web development skills and projects. It is
                  structured with a Home page, detailed Portfolio sections, and
                  a Contact page.
                </Card.Text>
                <Card.Text className="text-start bold">Key Features:</Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    🏠 Home: Introduction and overview.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📂 Portfolio: Detailed project showcases.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📧 Contact: Form and email for easy communication.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    ✨ Responsive Design: Ensuring optimal viewing on all
                    devices.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🌓 Dark/Light Mode: User-friendly theme toggle.
                  </ListGroup.Item>
                </ListGroup>
                <Card.Text className="text-start bold mt-3">
                  Technologies Used:
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    ⚛️ React: For dynamic UI rendering.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🌐 React Bootstrap: For responsive components.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    🎨 CSS & SCSS: For unique styling and animations.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📧 EmailJS: For seamless contact form functionality.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    📝 Formik: For efficient form handling.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    ✅ Yup: For robust form validation.
                  </ListGroup.Item>
                </ListGroup>
                <Card.Text className="text-start bold mt-3">
                  About This Site:
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  <ListGroup.Item>
                    I developed this site to effectively present my skills and
                    projects.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Each Portfolio section provides in-depth information about
                    my work, including descriptions, images, and links.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    The Contact page allows visitors to easily reach out to me.
                  </ListGroup.Item>
                </ListGroup>
                <div className="mt-4 d-flex gap-2">
                  <Button
                    variant="primary"
                    href="https://dyyang.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌍 View Live Site
                  </Button>
                  <Button
                    variant={`${darkMode ? "outline-light" : "outline-dark"}`}
                    href="https://github.com/ArmsTina/portfolio_website"
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
