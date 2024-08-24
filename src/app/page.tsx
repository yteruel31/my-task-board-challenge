import { Container } from "@/components/_ui/Container";
import { EditDuotone, Logo } from "@/components/_ui/Icons";
import React from "react";
import { Task } from "@/components/Tasks/Task";
import { AddTask } from "@/components/Tasks/AddTask";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 items-start">
          <Logo width={40} />
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <h2 className="text-4xl">My Task board</h2>
              <EditDuotone width={24} />
            </div>
            <span>Tasks to keep organised</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <Task />
          <Task />
          <Task />
          <AddTask />
        </div>
      </div>
    </Container>
  );
}
