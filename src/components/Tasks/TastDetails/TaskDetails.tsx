import { TextInput } from "@/components/_ui/TextInput";
import { TextArea } from "@/components/_ui/TextArea";
import { IconSelect } from "@/components/Tasks/TastDetails/IconSelect";
import { StatusSelect } from "@/components/Tasks/TastDetails/StatusSelect";
import { TimeAtackDuotone } from "@/components/_ui/Icons";
import { Button } from "@/components/_ui/Button";

export const TaskDetails = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-5">
        <TextInput label="Task name" id="task-name" />
        <TextArea label="Description" id="task-description" />
        <IconSelect
          label="Icon"
          type="single"
          defaultValue="headphone"
          items={[
            { value: "headphone", icon: "🎧" },
            { value: "microphone", icon: "🎤" },
            { value: "clapper", icon: "🎬" },
          ]}
        />
        <StatusSelect
          label="Status"
          type="single"
          defaultValue="headphone"
          items={[
            {
              value: "in-progress",
              label: "In Progress",
              icon: <TimeAtackDuotone width={20} />,
              color: "bg-in-progress-500",
            },
            {
              value: "completed",
              label: "Completed",
              icon: <TimeAtackDuotone width={20} />,
              color: "bg-completed-500",
            },
            {
              value: "wontdo",
              label: "Won't do",
              icon: <TimeAtackDuotone width={20} />,
              color: "bg-wontdo-500",
            },
          ]}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="secondary">Delete</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};
