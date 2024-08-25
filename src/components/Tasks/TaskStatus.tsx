import { Status } from "@prisma/client";
import {
  CloseRingDuotone,
  DoneRound,
  DoneRoundDuotone,
  TimeAtackDuotone,
} from "@/components/_ui/Icons";
import React from "react";

export const TaskStatus = ({ status }: { status: Status }) => {
  switch (status) {
    case "TODO":
      return (
        <div className="bg-gray-400 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
          <DoneRound width={20} />
        </div>
      );
    case "IN_PROGRESS":
      return (
        <div className="bg-in-progress-500 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
          <TimeAtackDuotone width={20} />
        </div>
      );
    case "COMPLETED":
      return (
        <div className="bg-completed-500 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
          <DoneRoundDuotone width={20} />
        </div>
      );
    case "WONTDO":
      return (
        <div className="bg-wontdo-500 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
          <CloseRingDuotone width={20} />
        </div>
      );
    default:
      return <></>;
  }
};
