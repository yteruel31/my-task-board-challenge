import React from "react";
import { Label } from "@/components/_ui/Label";

interface TextInputProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

export const TextArea = ({ label, id, ...rest }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        {...rest}
        className="text-base p-3 rounded-xl border border-gray-300 resize-none"
        id={id}
        rows={5}
      />
    </div>
  );
};
