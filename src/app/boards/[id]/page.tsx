import React from "react";
import { TaskItem } from "@/app/boards/[id]/task-item";
import { assertAuthenticated } from "@/lib/session";
import { getTasksByBoardId } from "@/data-access/task";

export default async function Page({ params }: { params: { id: string } }) {
  await assertAuthenticated();

  const tasks = await getTasksByBoardId(params.id);

  return tasks.map((task) => (
    <TaskItem key={task.id} task={task} boardId={params.id} />
  ));
}
