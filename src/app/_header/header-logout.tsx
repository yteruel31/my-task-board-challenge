"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/_ui/Tooltip";
import { logoutAction } from "@/app/_header/actions";
import { MaterialSymbol } from "react-material-symbol-icons";

export const HeaderLogout = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className="h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors hover:bg-wontdo-400"
          onClick={async () => {
            await logoutAction();
          }}
        >
          <MaterialSymbol
            style={{ color: "revert-layer" }}
            className="text-wontdo-500"
            icon={"logout"}
            size={24}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>Logout</TooltipContent>
    </Tooltip>
  );
};
