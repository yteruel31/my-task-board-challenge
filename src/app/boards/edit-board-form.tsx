"use client";

import { TextInput } from "@/components/_ui/TextInput";
import { TextArea } from "@/components/_ui/TextArea";
import { Button } from "@/components/_ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { useDialogContext } from "@/components/_ui/Dialog";
import { Board } from "@prisma/client";
import { deleteBoardAction, updateBoardAction } from "@/app/boards/actions";

const addBoardSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const EditBoardForm = ({ board }: { board: Board }) => {
  const { setOpen } = useDialogContext();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<z.infer<typeof addBoardSchema>>({
    resolver: zodResolver(addBoardSchema),
    mode: "onChange",
    defaultValues: {
      title: board.title,
      description: board.description,
    },
  });

  const { execute: updateBoard, isPending: updateBoardIsPending } =
    useServerAction(updateBoardAction, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: ({ err }) => {
        console.error(err);
      },
    });

  const { execute: deleteBoard, isPending: deleteBoardIsPending } =
    useServerAction(deleteBoardAction, {
      onSuccess: () => {
        setOpen(false);
      },
      onError: ({ err }) => {
        console.error(err);
      },
    });

  const onSubmit: SubmitHandler<z.infer<typeof addBoardSchema>> = (values) => {
    updateBoard({ ...values, id: board.id });
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5">
          <TextInput {...register("title")} label="Task name" />
          <TextArea {...register("description")} label="Description" />
        </div>
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="secondary"
            disabled={!isValid}
            onClick={() => deleteBoard({ id: board.id })}
          >
            Delete
          </Button>
          <Button type="submit" disabled={!isValid}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};
