import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const curYear = new Date().getFullYear();
  return (
    <footer
      className="bg-dark text-white py-3 mt-auto"
      // style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <Container>
        <Row>
          <Col>
            <p className="mb-0 text-center">
              Yiliba &copy; {curYear} Designed by AR
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
