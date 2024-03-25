"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  function handleSignOut() {
    signOut({ callbackUrl: "/" });
  }
  return <span onClick={handleSignOut}>{children}</span>;
}
