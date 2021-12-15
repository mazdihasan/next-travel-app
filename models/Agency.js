import mongoose from "mongoose";
// Declare the Schema of the Mongo model
const agencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  website: {
    type: String,
  },
  info: {
    type: String,
  },
  image: {
    type: String,
  },
},{timestamps: true});
const Agency = mongoose.models.Agency || mongoose.model("Agency", agencySchema);
export default Agency;