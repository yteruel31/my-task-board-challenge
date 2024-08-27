import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/_ui/Avatar";
import { User } from "lucia";
import { Logo } from "@/components/_ui/Icons";
import { HeaderLogout } from "@/app/_header/header-logout";
import { HeaderLogin } from "@/app/_header/header-login";
import { SignedInWithUser, SignedOut } from "@/components/auth";
import { HeaderViewBoards } from "@/app/_header/header-view-boards";

export async function Header() {
  return (
    <div className="px-5 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl py-4 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo width={40} />
          <span className="text-sm md:text-base lg:text-2xl font-bold">
            Todo App
          </span>
        </Link>
        <SignedInWithUser>
          {(user) => (
            <div className="flex gap-5 items-center">
              <HeaderViewBoards />
              <ProfileAvatar user={user} />
              <HeaderLogout />
            </div>
          )}
        </SignedInWithUser>
        <SignedOut>
          <HeaderLogin />
        </SignedOut>
      </div>
    </div>
  );
}

async function ProfileAvatar({ user }: { user: User }) {
  return (
    <Avatar>
      <AvatarImage src={`https://github.com/${user.username}.png?size=40`} />
      <AvatarFallback>
        {user.username?.substring(0, 2).toUpperCase() ?? "AA"}
      </AvatarFallback>
    </Avatar>
  );
}
