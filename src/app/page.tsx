import Header from "@/components/header/header";
import { FileInput } from "@/components/ui/file-input";
import UploadPicture from "@/components/upload-pictures/upload-pictures";
import prisma from "@/db";
import { Plus, PlusCircle, PlusCircleIcon, Upload } from "lucide-react";

// async function getUser(){
//   try{
//   return prisma.user.findMany()
//   }catch(e){
//     console.log(e);
//   }
// }
// async function getCurrentUser() {
//   try{
//     return await prisma.user.findFirstOrThrow();
//   }catch(e){
//     console.log(e);
//   }
// }

// async function addPictureForCurrentUser(newPictureUrl:any) {
//   const currentUser = await getCurrentUser();
//   if (!currentUser) {
//     console.error("No user found.");
//     return;
//   }
//   prisma.picture.create({data:{url:'', userId:1, listId:1}})
//   // Create a new picture record and associate it with the current user
//   // const createdPicture = await prisma.picture.create({
//   //   data: {
//   //     url: newPictureUrl,
//   //     user: {
//   //       connect: { id: currentUser.id }
//   //     }
//   //   }
//   // });

//   // console.log("New picture added for user:", createdPicture);
// }

export default async function Home() {
  // const user = await getUser();
  // console.log(user)
  return (
    <>
      <Header />
      <UploadPicture />
    </>
  );
}
