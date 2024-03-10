import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response) => {
  console.log("api online");
  return NextResponse.json({status: true, message:"Server is online"})
}