"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };

  try {
    await connectMongo();
    await new User(userData).save();

    //revalidate users
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    await connectMongo();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
