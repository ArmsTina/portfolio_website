import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="background p-5 text-center">
      <div>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>

        <Button variant={"outline-light"} as={Link as any} to="/">
          Return Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
