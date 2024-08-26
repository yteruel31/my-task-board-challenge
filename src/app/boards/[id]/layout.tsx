import { EditDuotone } from "@/components/_ui/Icons";
import { Container } from "@/components/_ui/Container";
import React from "react";

export default function Layout({
  children,
  addTask,
}: {
  children: React.ReactNode;
  addTask: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <h2 className="text-4xl">My Task board</h2>
            <EditDuotone width={24} />
          </div>
          <span>Tasks to keep organised</span>
        </div>
        <div className="w-full flex flex-col gap-5">
          {children}
          {addTask}
        </div>
      </div>
    </Container>
  );
}
