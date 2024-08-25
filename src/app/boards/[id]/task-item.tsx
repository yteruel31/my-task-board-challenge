import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPopover,
  DialogTrigger,
} from "@/components/_ui/Dialog";
import { EditTaskForm } from "@/app/boards/[id]/edit-task-form";
import { Task } from "@prisma/client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { TaskStatus } from "@/components/Tasks/TaskStatus";
import { taskIconEmojiMapper } from "@/utils/task-icon-mapper";

const taskItemContainerVariants = cva(
  "flex justify-between text-left p-4 rounded-lg w-full",
  {
    variants: {
      variant: {
        IN_PROGRESS: "bg-in-progress-400",
        COMPLETED: "bg-completed-400",
        WONTDO: "bg-wontdo-400",
        TODO: "bg-gray-400",
      },
    },
  },
);

export const TaskItem = ({
  boardId,
  task,
}: {
  boardId: string;
  task: Task;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(taskItemContainerVariants({ variant: task.status }))}
        >
          <div className="flex gap-5 items-center">
            <div className="bg-white min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
              <span>{taskIconEmojiMapper[task.icon]}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">{task.title}</span>
              <span className="text-base font-normal">{task.description}</span>
            </div>
          </div>
          <TaskStatus status={task.status} />
        </div>
      </DialogTrigger>
      <DialogPopover>
        <DialogHeader>Task details</DialogHeader>
        <DialogContent>
          <EditTaskForm task={task} boardId={boardId} />
        </DialogContent>
      </DialogPopover>
    </Dialog>
  );
};
