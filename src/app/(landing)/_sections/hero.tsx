import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/_ui/Container";
import { SignedIn, SignedOut } from "@/components/auth";
import { Button } from "@/components/_ui/Button";

export function HeroSection() {
  return (
    <Container size="lg">
      <div className="flex flex-col md:flex-row gap-y-14 w-full justify-between items-center">
        <div className="">
          <h1 className="text-5xl md:text-7xl max-w-3xl mt-10 leading-[1.2] font-semibold">
            An enhanced way of listing your tasks
          </h1>
          <p className="mt-5 text-gray-500 text-lg max-w-[600px]">
            Keep track of your tasks and manage your time efficiently with Todo
            App. Todo App is a task management tool that helps you stay
            organized and focused on your goals.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
            <SignedIn>
              <Button variant="tertiary">
                <Link href="/boards">View your boards</Link>
              </Button>
            </SignedIn>

            <SignedOut>
              <Button variant="tertiary">
                <Link href="/login">Login to your account</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
        <Image
          className="rounded-xl w-[300px] h-[450px] shadow-lg md:w-[400px] md:h-[600px]"
          width="200"
          height="500"
          src="/overview.png"
          alt="hero image"
        />
      </div>
    </Container>
  );
}
