import React from "react";
import { Container } from "@/components/_ui/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="flex flex-col gap-10 items-center w-full">{children}</div>
    </Container>
  );
}
