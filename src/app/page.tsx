import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import prisma  from "@/db";
import ThemeSwitch from "./ThemeSwitch";
import { FileInput } from "@/components/ui/file-input";

function getUser(){
  return prisma.user.findMany()
}

async function getCurrentUser() {
  try{ 
    return await prisma.user.findFirstOrThrow();
  }catch(e){
    console.log(e);
  }
}

async function addPictureForCurrentUser(newPictureUrl:any) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    console.error("No user found.");
    return;
  }
  prisma.picture.create({data:{url:'', userId:1, listId:1}})
  // Create a new picture record and associate it with the current user
  // const createdPicture = await prisma.picture.create({
  //   data: {
  //     url: newPictureUrl,
  //     user: {
  //       connect: { id: currentUser.id }
  //     }
  //   }
  // });

  // console.log("New picture added for user:", createdPicture);
}

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <>
      <div className="px-2">
        <ThemeSwitch className="h-6 w-6 m-2"/>
      </div>
      <Avatar className="hover:opacity-70">
        <AvatarImage src={process.env.S3 + 'stunnerhash.jpg'} alt="@shadcn" className="object-cover"/>
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
    </>
  );
}
