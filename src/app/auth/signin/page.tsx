import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/auth/components/user-auth-form";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="h-full">
        <Header isLogin />
        <div className="container relative flex h-5/6 flex-col items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-max ">
            <div className="flex flex-col space-y-2 text-left">
              <h1 className="w-6/12 text-2xl font-semibold tracking-tight">
                Login
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
