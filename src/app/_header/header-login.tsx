"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/_ui/Tooltip";
import { MaterialSymbol } from "react-material-symbol-icons";
import Link from "next/link";

export const HeaderLogin = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          className="h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors hover:bg-gray-300"
          href="/login"
        >
          <MaterialSymbol
            style={{ color: "revert-layer" }}
            className="text-gray-800"
            icon="login"
            size={24}
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent>Login</TooltipContent>
    </Tooltip>
  );
};
