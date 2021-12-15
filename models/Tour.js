import mongoose from "mongoose";
// Declare the Schema of the Mongo model
const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slag: {
    type: String,
    required: true,
    unique: true,
  },
  info: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
    required: true,
  },
},{timestamps: true});
const Tour = mongoose.models.Tour || mongoose.model("Tour", tourSchema);
export default Tour;
