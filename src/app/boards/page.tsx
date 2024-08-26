import { getBoardsByUserId } from "@/data-access/board";
import { assertAuthenticated } from "@/lib/session";
import Link from "next/link";
import { MaterialSymbol } from "react-material-symbol-icons";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPopover,
  DialogTrigger,
} from "@/components/_ui/Dialog";
import { EditBoardForm } from "@/app/boards/edit-board-form";
import { Button } from "@/components/_ui/Button";
import { AddBoardForm } from "@/app/boards/add-board-form";

export default async function Page() {
  const user = await assertAuthenticated();

  const boards = await getBoardsByUserId(user.id);

  return (
    <>
      <h2 className="text-4xl">My boards</h2>
      {boards.map((board) => (
        <div
          key={board.id}
          className="min-w-full flex justify-between items-center"
        >
          <Link
            href={`/boards/${board.id}`}
            className="text-xl hover:underline"
          >
            {board.title}
          </Link>
          <Dialog>
            <DialogTrigger className="self-start">
              <div className="h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors hover:bg-gray-300 cursor-pointer">
                <MaterialSymbol icon={"edit"} size={20} />
              </div>
            </DialogTrigger>
            <DialogPopover>
              <DialogHeader>Board details</DialogHeader>
              <DialogContent>
                <EditBoardForm board={board} />
              </DialogContent>
            </DialogPopover>
          </Dialog>
        </div>
      ))}
      <Dialog>
        <DialogTrigger className="self-start">
          <Button>Add new board</Button>
        </DialogTrigger>
        <DialogPopover>
          <DialogHeader>Board details</DialogHeader>
          <DialogContent>
            <AddBoardForm userId={user.id} />
          </DialogContent>
        </DialogPopover>
      </Dialog>
    </>
  );
}
