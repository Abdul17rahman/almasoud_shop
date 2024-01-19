import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-2 rounded" style={{ width: "18rem" }}>
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" width={30} height={200} src={product.image} />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="h4">{product.name}</Card.Title>
        </a>
        <Card.Text as="h4">Price: ${product.price}</Card.Text>
        <Card.Text as="div">
          <Card.Text as="p">
            <strong>In Stock:</strong> {product.stock}Kgs
          </Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
