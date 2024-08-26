"use server";

import { authenticatedAction } from "@/lib/safe-action";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createBoard } from "@/data-access/board";

export const createBoardAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      userId: z.string().min(1),
    }),
  )
  .handler(async ({ input }) => {
    await createBoard({
      title: input.title,
      description: input.description,
      userId: input.userId,
    });

    revalidatePath(`/boards`);
  });
