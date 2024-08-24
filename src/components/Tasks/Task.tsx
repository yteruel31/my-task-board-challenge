import { TimeAtackDuotone } from "@/components/_ui/Icons";
import React from "react";

export const Task = () => {
  return (
    <div className="flex gap-5 items-center p-4 bg-in-progress-400 rounded-lg">
      <div className="bg-white min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
        <span>🎲</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold">Task in Progress</span>
        <span className="text-base font-normal">
          Enter a long description here to explain the task in progress and what
          needs to be done.
        </span>
      </div>
      <div className="bg-in-progress-500 min-w-11 min-h-11 flex items-center justify-center rounded-lg self-start">
        <TimeAtackDuotone width={20} />
      </div>
    </div>
  );
};
