import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "./../products";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id: pdt_id } = useParams();
  useEffect(() => {
    const getPdt = async () => {
      const { data } = await axios.get(`/api/product/${pdt_id}`);
      // console.log(data);
      setProduct(data["product"]);
    };
    getPdt();
  }, [pdt_id]);
  // const foundPdt = products.find((p) => p._id === pdt_id);
  return (
    <div>
      <Row className="my-2">
        <Col sm={12} md={6} lg={6}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title as={"h1"}>{product.name}</Card.Title>
              {/* <Card.Text>{product.description}</Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title as={"h4"}>Description:</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                {product.category} | {product.season}
              </Card.Text>
              <Card.Title as={"h5"}>Price: ${product.price}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <strong>In Stock: </strong>
                {product.stock}Kgs
              </Card.Subtitle>
              <Card.Text className="my-3" as="div">
                <Rating
                  value={product.rating}
                  text={`${product.reviews} reviews`}
                />
              </Card.Text>
              <Link className="btn btn-primary" to={"/"}>
                Back
              </Link>
              <Button className="btn-secondary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
