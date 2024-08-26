"use client";

import { TextInput } from "@/components/_ui/TextInput";
import { TextArea } from "@/components/_ui/TextArea";
import { Button } from "@/components/_ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { useDialogContext } from "@/components/_ui/Dialog";
import { createBoardAction } from "@/app/boards/actions";
import { useToast } from "@/components/_ui/use-toast";

const addBoardSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const AddBoardForm = ({ userId }: { userId: string }) => {
  const { toast } = useToast();
  const { setOpen } = useDialogContext();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<z.infer<typeof addBoardSchema>>({
    resolver: zodResolver(addBoardSchema),
    mode: "onChange",
  });

  const { execute: createBoard, isPending } = useServerAction(
    createBoardAction,
    {
      onSuccess: () => {
        toast({
          title: "Board created",
          description: "You can now add tasks to it",
          variant: "success",
        });
        setOpen(false);
      },
      onError: ({ err }) => {
        console.error(err);
        toast({
          title: "Something went wrong",
          description: err.message,
          variant: "destructive",
        });
      },
    },
  );

  const onSubmit: SubmitHandler<z.infer<typeof addBoardSchema>> = (values) => {
    createBoard({ ...values, userId });
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5">
          <TextInput {...register("title")} label="Task name" />
          <TextArea {...register("description")} label="Description" />
        </div>
        <div className="flex justify-end gap-4">
          <Button type="submit" disabled={!isValid}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};
