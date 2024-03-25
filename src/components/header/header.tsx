import ThemeSwitch from "@/components/header/theme-switch";
import { Bebas_Neue } from "next/font/google";

import { cn } from "@/lib/utils";
import DresspressoIcon from "@/components/header/dresspresso-icon";
import UserAvatar from "./user-avatar-dropdown";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Header({ isLogin = false }: { isLogin?: boolean }) {
  return (
    <div className="sticky top-0 z-10 flex justify-between bg-background p-3">
      <div className="flex select-none items-center">
        <div className="mx-1 mb-1 h-6 w-6 ">
          <DresspressoIcon />
        </div>
        <h1 className={cn(bebasNeue.className, "text-3xl ")}>Dresspresso</h1>
      </div>
      <div className="flex select-none items-center justify-end">
        <ThemeSwitch className="mx-3 h-6 w-6" />
        {!isLogin && <UserAvatar />}
      </div>
    </div>
  );
}
