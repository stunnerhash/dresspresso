"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/schemas";
import bcrypt from "bcrypt";
import db from "@/db";
export const register = async (values: z.infer<typeof RegisterSchema>)=>{
  const validatedFields = RegisterSchema.safeParse(values);
  if(!validatedFields.success){
    return {success:false, message:"Invalid Fields"};
  }
  const {name, email, password} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await db.user.findUnique({
    where:{
      email
    }
  })
  if(existingUser){
    return {success: false, message: "Email already in use"};
  }
  await db.user.create({
    data:{
      name,
      email,
      password:hashedPassword
    }
  })

  return { success: true, message:"Email sent!" }
}