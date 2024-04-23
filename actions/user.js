"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";

const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };

  await connectMongo(); // Establish MongoDB connection

  // Create a new user instance and save it to the database
  const newUser = new User(userData);
  await newUser.save();
};

export default addUser;
