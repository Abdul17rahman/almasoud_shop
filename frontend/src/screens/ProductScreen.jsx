import { Link, useParams } from "react-router-dom";
import products from "./../products";

const ProductScreen = () => {
  const { id: pdt_id } = useParams();
  const foundPdt = products.find((p) => p._id === pdt_id);
  return (
    <div>
      <h1>{foundPdt.name}</h1>
      <Link to={"/"}>
        <p>Back</p>
      </Link>
    </div>
  );
};

export default ProductScreen;
