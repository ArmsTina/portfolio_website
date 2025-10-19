import { Link, useParams } from "react-router-dom";
import "../scss/Portfolio.css";

import {
  Carousel,
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
  Image,
} from "react-bootstrap";
import portfolioData from "../data/portfolioData.json";

import p1_1 from "../assets/portfolio1-1.png";
import p1_2 from "../assets/portfolio1-2.png";
import p1_3 from "../assets/portfolio1-3.png";
import p2_1 from "../assets/portfolio2-1.png";
import p2_2 from "../assets/portfolio2-2.png";
import p2_3 from "../assets/portfolio2-3.png";
import p3_1 from "../assets/portfolio3-1.png";
import p3_2 from "../assets/portfolio3-2.png";
import p3_3 from "../assets/portfolio3-3.png";

interface PortfolioProps {
  darkMode: boolean;
}

interface CarouselItem {
  imageName: string;
  alt: string;
  captionTitle: string;
  captionText: string;
}

interface FeatureSection {
  title: string;
  items: string[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  liveSiteUrl: string;
  githubRepoUrl: string;
  description: string;
  carouselItems: CarouselItem[];
  keyFeatures: FeatureSection;
  technologies: FeatureSection;
  contributions?: FeatureSection;
}

const imageMap: Record<string, string> = {
  "portfolio1-1.png": p1_1,
  "portfolio1-2.png": p1_2,
  "portfolio1-3.png": p1_3,
  "portfolio2-1.png": p2_1,
  "portfolio2-2.png": p2_2,
  "portfolio2-3.png": p2_3,
  "portfolio3-1.png": p3_1,
  "portfolio3-2.png": p3_2,
  "portfolio3-3.png": p3_3,
};

const Portfolio = ({ darkMode }: PortfolioProps) => {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = portfolioData.find((p) => p.id === id);

  if (!project) {
    return (
      <Container className="background p-5 text-center">
        <div>
          <h2>Project Not Found</h2>
          <p>Sorry, the project you are looking for does not exist.</p>
          <Button variant={"outline-light"} as={Link as any} to="/">
            Return Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div
      className={`background portfolio ${darkMode ? "background-dark" : ""}`}
    >
      <Container fluid className="p-5">
        <Row className="d-flex v-center">
          <Col md={12} lg={7}>
            <Carousel className="animated">
              {project.carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <Image
                    src={imageMap[item.imageName]}
                    rounded
                    fluid
                    alt={item.alt}
                  />
                  <Carousel.Caption className="caption-background">
                    <h3>{item.captionTitle}</h3>
                    <p>{item.captionText}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col md={12} lg={5} className="mt-lg-0 mt-5">
            <Card
              className={`animated explaination shadow-sm ${
                darkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <Card.Body className="p-4 mw-100">
                <Row className="v-center mb-3">
                  <Col md={12} xl={6}>
                    <Card.Title className="bold v-center">
                      {project.title}
                    </Card.Title>
                    <Card.Subtitle className="v-center">
                      {project.subtitle}
                    </Card.Subtitle>
                  </Col>
                  <Col md={12} xl={6} className="mt-lg-0 mt-3">
                    <div className="d-flex gap-2">
                      <Button
                        variant="primary"
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🌍 View Live Site
                      </Button>
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        href={project.githubRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🔗 GitHub Repo
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Card.Text className="text-start mt-4">
                  {project.description}
                </Card.Text>

                <Card.Text className="text-start bold">
                  {project.keyFeatures.title}
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  {project.keyFeatures.items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>

                <Card.Text className="text-start bold mt-3">
                  {project.technologies.title}
                </Card.Text>
                <ListGroup variant="flush" className="text-start">
                  {project.technologies.items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>

                {project.contributions && (
                  <>
                    <Card.Text className="text-start bold mt-3">
                      {project.contributions.title}
                    </Card.Text>
                    <ListGroup variant="flush" className="text-start">
                      {project.contributions.items.map((item, index) => (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
