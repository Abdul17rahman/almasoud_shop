import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-2 rounded" style={{ width: "18rem" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" width={30} height={200} src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="h4">{product.name}</Card.Title>
        </Link>
        <Card.Text as="h4">Price: ${product.price}</Card.Text>
        <Card.Text as="div">
          <Card.Text as="p">
            <strong>In Stock:</strong> {product.stock}Kgs
          </Card.Text>
        </Card.Text>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.reviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
