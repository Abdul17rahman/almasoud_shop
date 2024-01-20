import { FaStar, FaRegStar } from "react-icons/fa";
const Rating = ({ value, text }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>{index + 1 <= value ? <FaStar /> : <FaRegStar />}</span>
  ));
  return (
    <div className="rating">
      <span>{stars}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
