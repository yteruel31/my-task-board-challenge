"use client";

import { TextInput } from "@/components/_ui/TextInput";
import { TextArea } from "@/components/_ui/TextArea";
import { IconSelect } from "@/components/Tasks/TastDetails/IconSelect";
import { StatusSelect } from "@/components/Tasks/TastDetails/StatusSelect";
import {
  CloseRingDuotone,
  DoneRoundDuotone,
  TimeAtackDuotone,
} from "@/components/_ui/Icons";
import { Button } from "@/components/_ui/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { useDialogContext } from "@/components/_ui/Dialog";
import { Task } from "@prisma/client";
import { deleteTaskAction, updateTaskAction } from "@/app/boards/[id]/actions";
import { useToast } from "@/components/_ui/use-toast";

const addTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  status: z.string().min(1),
});

export const EditTaskForm = ({
  boardId,
  task,
}: {
  boardId: string;
  task: Task;
}) => {
  const { toast } = useToast();
  const { setOpen } = useDialogContext();

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid },
  } = useForm<z.infer<typeof addTaskSchema>>({
    resolver: zodResolver(addTaskSchema),
    mode: "onChange",
    defaultValues: {
      title: task.title,
      description: task.description,
      icon: task.icon,
      status: task.status,
    },
  });

  const { execute: updateTask, isPending: updateTaskIsPending } =
    useServerAction(updateTaskAction, {
      onSuccess: () => {
        toast({
          title: "Task edited",
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
    });

  const { execute: deleteTask, isPending: deleteTaskIsPending } =
    useServerAction(deleteTaskAction, {
      onSuccess: () => {
        toast({
          title: "Task deleted",
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
    });

  const onSubmit: SubmitHandler<z.infer<typeof addTaskSchema>> = (values) => {
    updateTask({ ...values, id: task.id, boardId });
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
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
                    icon: <DoneRoundDuotone width={20} />,
                    color: "bg-completed-500",
                  },
                  {
                    value: "WONTDO",
                    label: "Won't do",
                    icon: <CloseRingDuotone width={20} />,
                    color: "bg-wontdo-500",
                  },
                ]}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="secondary"
            disabled={!isValid}
            onClick={() => deleteTask({ boardId, id: task.id })}
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
