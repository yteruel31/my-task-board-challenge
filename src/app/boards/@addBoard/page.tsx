import { Button } from "@/components/_ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPopover,
  DialogTrigger,
} from "@/components/_ui/Dialog";
import React from "react";
import { AddBoardForm } from "@/app/boards/@addBoard/add-board-form";
import { assertAuthenticated } from "@/lib/session";

export default async function Page() {
  const user = await assertAuthenticated();

  return (
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
  );
}
