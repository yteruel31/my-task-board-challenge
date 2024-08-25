import React, { forwardRef } from "react";
import { Label } from "@/components/_ui/Label";

interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <textarea
          {...rest}
          ref={ref}
          className="text-base p-3 rounded-xl border border-gray-300 resize-none"
          id={id}
          rows={5}
        />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
