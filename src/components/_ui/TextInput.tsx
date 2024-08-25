import React from "react";
import { Label } from "@/components/_ui/Label";

interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const TextInput = ({ label, id, ...rest }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <input
        {...rest}
        className="text-base p-3 rounded-xl border border-gray-300"
        id={id}
      />
    </div>
  );
};
