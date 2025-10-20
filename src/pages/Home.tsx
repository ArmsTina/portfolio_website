import "../scss/Home.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profileImage from "../assets/Spring_SGA_Arms_Tina.png";
import InfoCard from "../components/InfoCard";
import cardsData from "../data/cardsData.json";
import { faBook, faPencil, faUserTie } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface HomeProps {
  darkMode: boolean;
}

type CardItem =
  | { type: "text"; bold?: boolean; value: string }
  | { type: "pair"; label: string; value: string }
  | { type: "link"; label: string; href: string; value: string };

const iconMap: { [key: string]: IconDefinition } = {
  faBook,
  faPencil,
  faUserTie,
};

const Home = ({ darkMode }: HomeProps) => {
  const renderItem = (item: CardItem, idx: number): React.ReactNode => {
    if (item.type === "text") {
      return (
        <span key={idx} className={item.bold ? "bold" : ""}>
          {item.value}
        </span>
      );
    }
    if (item.type === "pair") {
      return (
        <span key={idx}>
          <span className="bold">{item.label}</span> {item.value}
        </span>
      );
    }
    if (item.type === "link") {
      return (
        <span key={idx}>
          <span className="bold">{item.label}</span>{" "}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.value}
          </a>
        </span>
      );
    }
    return null;
  };

  return (
    <div
      id="home-background"
      className={`background ${darkMode ? "background-dark" : ""}`}
    >
      <Container fluid className="mt-5">
        <div className="animated">
          <Row>
            <Col md={12} lg={5}>
              <Image
                src={profileImage}
                rounded
                fluid
                className="profileImage mt-3"
                alt="Profile Picture of Dongyoung"
              />
            </Col>
            <Col md={12} lg={7}>
              <div className="introduction mt-4 mb-4 mt-lg-5 mb-lg-5 text-white">
                <h1 className="mb-3 p-3 bold">
                  Hello, I'm <span className="text-green">Dongyoung</span>
                </h1>
                <h2 className="mb-3">
                  A Computer Science major with a Game Design and Development
                  minor at the University of Arizona.
                </h2>
                <h2 className="mb-5">
                  I'm passionate about{" "}
                  <span className="text-green">full-stack web development</span>
                  .
                </h2>
              </div>
            </Col>
          </Row>

          <Button
            variant={`${darkMode ? "dark" : "light"}`}
            href="/contact"
            className="button-Home m-2"
          >
            ✉️ Contact Me
          </Button>
          <Button
            variant={`${darkMode ? "dark" : "light"}`}
            href="https://github.com/ArmsTina/portfolio_website/blob/main/src/assets/Dongyoung%20Yang%20-%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-Home m-2"
          >
            📝 Resume
          </Button>
        </div>
      </Container>

      <Container fluid className="mt-3 mb-5 animated-delay">
        <Row>
          {cardsData.map((card, i) => (
            <Col key={i} md={12} xl={4} className="mt-xl-0 mt-5 center">
              <InfoCard
                icon={iconMap[card.icon]}
                title={card.title}
                darkMode={darkMode}
                items={card.items.map((item, index) =>
                  renderItem(item as CardItem, index)
                )}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
