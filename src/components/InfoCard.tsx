import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface InfoCardProps {
  icon: IconDefinition;
  title: string;
  items: React.ReactNode[];
  darkMode: boolean;
}

const InfoCard = ({ icon, title, items, darkMode }: InfoCardProps) => {
  return (
    <Card
      className={`roundCard shadow-sm ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <Card.Body className="p-4">
        <FontAwesomeIcon
          icon={icon}
          className={`card-icon-light ${darkMode ? "card-icon-dark" : ""}`}
        />
        <Card.Title className="bold cardTitle">{title}</Card.Title>
        <ListGroup variant="flush" className="text-start">
          {items.map((item, idx) => (
            <ListGroup.Item key={idx}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
