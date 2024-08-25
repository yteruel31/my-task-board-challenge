import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/_ui/Label";
import React, { forwardRef } from "react";

interface IconSelectProps extends ToggleGroup.ToggleGroupSingleProps {
  label: string;
  items: { value: string; icon: string }[];
}

export const IconSelect = forwardRef<HTMLDivElement, IconSelectProps>(
  ({ items, id, label, ...rest }, ref) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <ToggleGroup.Root {...rest} ref={ref} id={id} className="flex gap-5">
        {items.map((item) => (
          <ToggleGroup.Item
            key={item.value}
            className="min-w-11 min-h-11 flex items-center justify-center rounded-lg bg-gray-300 border border-gray-300 select-none data-[state=on]:bg-in-progress-400"
            value={item.value}
            aria-label={item.value}
          >
            {item.icon}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  ),
);

IconSelect.displayName = "IconSelect";
