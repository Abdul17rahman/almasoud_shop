import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
      min: 0,
    },
    category: {
      type: String,
      enum: ["Fruit", "Vegetable", "Diary", "Other"],
      required: true,
    },
    season: {
      type: String,
      enum: ["Dry", "Cold", "Rainy"],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    numReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

export default Product;
