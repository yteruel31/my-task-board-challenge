"use client";

import { TextInput } from "@/components/_ui/TextInput";
import { TextArea } from "@/components/_ui/TextArea";
import { IconSelect } from "@/components/Tasks/TastDetails/IconSelect";
import { StatusSelect } from "@/components/Tasks/TastDetails/StatusSelect";
import { TimeAtackDuotone } from "@/components/_ui/Icons";
import { Button } from "@/components/_ui/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { createTaskAction } from "@/app/boards/[id]/@addTask/actions";
import { useDialogContext } from "@/components/_ui/Dialog";

const addTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  status: z.string().min(1),
});

export const AddTaskForm = ({ boardId }: { boardId: string }) => {
  const { setOpen } = useDialogContext();

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
  } = useForm<z.infer<typeof addTaskSchema>>({
    resolver: zodResolver(addTaskSchema),
    mode: "onChange",
  });

  const { execute: createTask, isPending } = useServerAction(createTaskAction, {
    onSuccess: () => {
      setOpen(false);
    },
    onError: ({ err }) => {
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof addTaskSchema>> = (values) => {
    createTask({ ...values, boardId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5">
          <TextInput {...register("title")} label="Task name" />
          <TextArea {...register("description")} label="Description" />
          <Controller
            name="icon"
            control={control}
            render={({ field }) => (
              <IconSelect
                label="Icon"
                type="single"
                value={field.value}
                onValueChange={field.onChange}
                items={[
                  { value: "headphone", icon: "🎧" },
                  { value: "microphone", icon: "🎤" },
                  { value: "clapper", icon: "🎬" },
                ]}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <StatusSelect
                label="Status"
                type="single"
                value={field.value}
                onValueChange={field.onChange}
                items={[
                  {
                    value: "IN_PROGRESS",
                    label: "In Progress",
                    icon: <TimeAtackDuotone width={20} />,
                    color: "bg-in-progress-500",
                  },
                  {
                    value: "COMPLETED",
                    label: "Completed",
                    icon: <TimeAtackDuotone width={20} />,
                    color: "bg-completed-500",
                  },
                  {
                    value: "WONTDO",
                    label: "Won't do",
                    icon: <TimeAtackDuotone width={20} />,
                    color: "bg-wontdo-500",
                  },
                ]}
              />
            )}
          />
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
