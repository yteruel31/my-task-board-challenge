"use server";

import { authenticatedAction } from "@/lib/safe-action";
import { createTask } from "@/data-access/task";
import { Status } from "@prisma/client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const createTaskAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      icon: z.string().min(1),
      status: z.string().min(1),
      boardId: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await createTask({
      boardId: input.boardId,
      title: input.title,
      description: input.description,
      icon: input.icon,
      status: input.status as Status,
    });

    revalidatePath(`/boards/${input.boardId}`);
  });
