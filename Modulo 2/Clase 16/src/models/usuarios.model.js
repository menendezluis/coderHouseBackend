// userModel.model.js
import mongoose from "mongoose";

//const userCollection = "User";

const userSchema = new mongoose.Schema({
  name: String,

});

export default mongoose.model("User", userSchema);
