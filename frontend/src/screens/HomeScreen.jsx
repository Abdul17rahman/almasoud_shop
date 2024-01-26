import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      const { data } = await axios.get("/api/product");
      setProduct(data["products"]);
    };
    fetchData();
  }, []);
  const availableProducts = products.filter((pdt) => pdt.stock > 0);
  return (
    <>
      <h1>Available products</h1>
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
