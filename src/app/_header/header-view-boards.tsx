"use client";

import { Button } from "@/components/_ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderViewBoards = () => {
  const pathname = usePathname();
  return pathname === "/" ? (
    <Button className="hidden md:inline">
      <Link href={"/boards"}>View your boards</Link>
    </Button>
  ) : (
    <></>
  );
};
