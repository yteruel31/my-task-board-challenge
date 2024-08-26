import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/_ui/Avatar";
import { User } from "lucia";
import { Logo } from "@/components/_ui/Icons";
import { HeaderLogout } from "@/app/_header/header-logout";
import { HeaderLogin } from "@/app/_header/header-login";

export async function Header() {
  const user = await getCurrentUser();
  const isSignedIn = !!user;

  return (
    <div className="px-5 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl py-4 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo width={40} />
          <span className="text-sm md:text-base lg:text-2xl font-bold">
            Todo App
          </span>
        </Link>
        {isSignedIn ? (
          <div className="flex gap-5 items-center">
            <ProfileAvatar user={user} />
            <HeaderLogout />
          </div>
        ) : (
          <HeaderLogin />
        )}
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
