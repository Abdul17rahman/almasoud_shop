import { Row, Col } from "react-bootstrap";
import products from "./../products";
import Product from "../components/Product";

function HomeScreen() {
  const availableProducts = products.filter((pdt) => pdt.stock > 0);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {availableProducts.map((pdt) => (
          <Col sm={12} md={6} lg={4} xl={3} key={pdt._id}>
            <Product product={pdt} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
