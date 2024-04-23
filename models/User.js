import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 100,
  },
});

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;

/* MONGO_URI=mongodb+srv://lswServerAction:t8jqaDOLQGk220rC@cluster0.mz3fw7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */
