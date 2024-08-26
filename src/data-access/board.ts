import { database } from "@/db";
import { UserId } from "@/data-access/types";
import { Board } from "@prisma/client";

export const getBoardsByUserId = async (userId: UserId) =>
  database.board.findMany({
    where: {
      userId: userId,
    },
  });

export const getBoard = async (boardId: string) =>
  database.board.findUnique({
    where: {
      id: boardId,
    },
  });

export const createBoard = async (board: Omit<Board, "id">) =>
  database.board.create({
    data: board,
  });

export const updateBoard = async (board: Omit<Board, "userId">) =>
  database.board.update({
    data: board,
    where: {
      id: board.id,
    },
  });

export const deleteBoard = async (id: string) =>
  database.board.delete({
    where: {
      id,
    },
  });
