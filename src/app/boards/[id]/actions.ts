"use server";

import { authenticatedAction } from "@/lib/safe-action";
import { z } from "zod";
import { deleteTask, updateTask } from "@/data-access/task";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateTaskAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.string().min(1),
      boardId: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
      icon: z.string().min(1),
      status: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await updateTask({
      id: input.id,
      title: input.title,
      description: input.description,
      icon: input.icon,
      status: input.status as Status,
    });

    revalidatePath(`/boards/${input.boardId}`);
  });

export const deleteTaskAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.string().min(1),
      boardId: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await deleteTask(input.id);

    revalidatePath(`/boards/${input.boardId}`);
  });
