import mongoose, { mongo } from "mongoose";

interface Review {
  id: string;
  content: string;
}

const reviewSchema = new mongoose.Schema<Review>({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
