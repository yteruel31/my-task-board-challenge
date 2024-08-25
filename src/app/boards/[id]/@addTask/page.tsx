import { AddRoundDuotone } from "@/components/_ui/Icons";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPopover,
  DialogTrigger,
} from "@/components/_ui/Dialog";
import { AddTaskForm } from "@/app/boards/[id]/@addTask/add-task-form";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-5 items-center p-4 bg-new-task rounded-lg">
          <div className="bg-in-progress-500 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
            <AddRoundDuotone width={20} />
          </div>
          <span className="text-base font-semibold">Add new task</span>
        </div>
      </DialogTrigger>
      <DialogPopover>
        <DialogHeader>Task details</DialogHeader>
        <DialogContent>
          <AddTaskForm boardId={params.id} />
        </DialogContent>
      </DialogPopover>
    </Dialog>
  );
}
