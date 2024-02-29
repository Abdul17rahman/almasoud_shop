import mongoose, { mongo } from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

const Review = mongoose.model("review", reviewSchema);

export default Review;
