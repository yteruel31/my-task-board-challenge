import { database } from "@/db";
import { Task } from "@prisma/client";

export const getTasksByBoardId = async (boardId: string) =>
  database.task.findMany({
    where: {
      boardId: boardId,
    },
  });

export const createTask = async (task: Omit<Task, "id">) =>
  database.task.create({
    data: task,
  });

export const updateTask = async (task: Omit<Task, "boardId">) =>
  database.task.update({
    data: task,
    where: {
      id: task.id,
    },
  });

export const deleteTask = async (id: string) =>
  database.task.delete({
    where: {
      id,
    },
  });
