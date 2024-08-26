import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/_ui/Label";
import React from "react";
import { cn } from "@/lib/utils";
import { MaterialSymbol } from "react-material-symbol-icons";

interface IconSelectProps extends ToggleGroup.ToggleGroupSingleProps {
  label: string;
  items: {
    value: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

export const StatusSelect = ({
  items,
  id,
  label,
  ...rest
}: IconSelectProps) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={id}>{label}</Label>
    <ToggleGroup.Root {...rest} id={id} className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <ToggleGroup.Item
          key={item.value}
          className="group min-w-8 min-h-8 md:min-w-11 md:min-h-11 flex justify-between items-center rounded-lg border border-gray-300 select-none p-1 data-[state=on]:border-focus"
          value={item.value}
          aria-label={item.value}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "min-w-8 min-h-8 md:min-w-11 md:min-h-11 flex items-center justify-center rounded-lg",
                item.color,
              )}
            >
              {item.icon}
            </div>

            <span className="text-sm md:text-base">{item.label}</span>
          </div>
          <MaterialSymbol
            icon="check_circle"
            filled
            style={{ color: "revert-layer" }}
            size={24}
            className="text-focus group-data-[state=off]:hidden"
          />
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  </div>
);
