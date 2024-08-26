"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { authenticatedAction } from "@/lib/safe-action";
import { deleteBoard, updateBoard } from "@/data-access/board";

export const updateBoardAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await updateBoard({
      id: input.id,
      title: input.title,
      description: input.description,
    });

    revalidatePath(`/boards`);
  });

export const deleteBoardAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await deleteBoard(input.id);

    revalidatePath(`/boards`);
  });
