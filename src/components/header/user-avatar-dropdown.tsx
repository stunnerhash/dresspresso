import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  List,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "../ui/button";

export default async function UserAvatar() {
  const session = await getServerSession(options);
  if (!session) {
    return (
      <Link href="/api/auth/signin">
        <Button variant="outline"> Signin / Login </Button>
      </Link>
    );
  }
  const userImage = session.user?.image;
  const userImageFallback = session.user?.name?.charAt(0);
  const userName = session.user?.name?.split(" ").slice(0, 2).join(" ");
  const userEmail = session.user?.email;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9 transition-all hover:scale-105 hover:opacity-80 active:scale-90">
          <AvatarImage
            src={`${userImage}`}
            alt="@shadcn"
            className="object-cover"
          />
          <AvatarFallback>{userImageFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-2 w-56">
        <DropdownMenuLabel>
          <p>{userName}</p>
          <p>{userEmail}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⌘⇧P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <List className="mr-2 h-4 w-4" />
            <span>Lists</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New List</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href="https://github.com/stunnerhash/dresspresso">
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>Github</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Contact me</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <Link href="mailto:utyadav07860@gmail.com">
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
              </Link>
              <Link href="https://linkedin.com/in/stunnerhash">
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Linkedin</span>
                </DropdownMenuItem>
              </Link>
              <Link href="https://twitter.com/stunnerhash">
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <Link href="api/auth/signout?callbackUrl=/">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
