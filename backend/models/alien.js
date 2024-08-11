import mongoose from "mongoose";

const alienSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  tech: {
    type: String,
    required: true,
  },
  sub: {
    type: Boolean,
    default: false,
    required: true,
  },
  email:{
    type : String,
    requires:true
  }
});
const User = mongoose.model("User", alienSchema);

export default User
