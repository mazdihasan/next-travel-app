import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },   
    password: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
    },    
    isAdmin: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    info: {
        type: String,
    }
  },
  { timestamps: true});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
