"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import wait from "@/utils/wait";
import { revalidatePath } from "next/cache";

// export const addUser = async (flag, formData) => {
export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const flag = formData.get("flag");

  const userData = {
    name,
    email,
  };

  // console.log(flag);

  try {
    await connectMongo();

    //add delay
    await wait(3000);

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
