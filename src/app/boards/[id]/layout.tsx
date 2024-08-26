import React from "react";
import Link from "next/link";
import { MaterialSymbol } from "react-material-symbol-icons";
import { getBoard } from "@/data-access/board";

export default async function Layout({
  children,
  addTask,
  params,
}: {
  children: React.ReactNode;
  addTask: React.ReactNode;
  params: { id: string };
}) {
  const board = await getBoard(params.id);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-5">
        <Link href="/boards" className="group flex items-center gap-3">
          <MaterialSymbol icon="arrow_back" size={24} />{" "}
          <span className="group-hover:underline">Back to boards</span>
        </Link>
        <h2 className="text-4xl">{board?.title}</h2>
        <span>{board?.description}</span>
      </div>
      <div className="w-full flex flex-col gap-5">
        {children}
        {addTask}
      </div>
    </div>
  );
}
