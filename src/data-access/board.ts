import { database } from "@/db";
import { UserId } from "@/data-access/types";

export const getBoardsByUserId = async (userId: UserId) =>
  database.board.findMany({
    where: {
      userId: userId,
    },
  });
