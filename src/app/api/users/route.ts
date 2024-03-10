import { NextResponse } from "next/server";
import prisma  from "@/db";

export const GET = async (req:Request, res:Response) => {
  try{
    return prisma.user.findMany()
  }catch(e){
    console.log(e);
  }
  return NextResponse.json({status: true, message:""})
}