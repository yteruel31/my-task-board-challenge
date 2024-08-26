import React from "react";
import { Container } from "@/components/_ui/Container";

export default function Layout({
  children,
  addBoard,
}: {
  children: React.ReactNode;
  addBoard: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex flex-col gap-10 items-center w-full">
        {children}
        {addBoard}
      </div>
    </Container>
  );
}
