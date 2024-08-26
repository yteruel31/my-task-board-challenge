import { getBoardsByUserId } from "@/data-access/board";
import { assertAuthenticated } from "@/lib/session";
import { Container } from "@/components/_ui/Container";
import Link from "next/link";
import { MaterialSymbol } from "react-material-symbol-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/_ui/DropdownMenu";
import { Button } from "@/components/_ui/Button";

export default async function Page() {
  const user = await assertAuthenticated();

  const boards = await getBoardsByUserId(user.id);

  return (
    <Container>
      <div className="flex flex-col gap-10 items-center w-full">
        <h2 className="text-4xl">My boards</h2>
        {boards.map((board) => (
          <div
            key={board.id}
            className="min-w-full flex justify-between items-center"
          >
            <Link
              href={`/boards/${board.id}`}
              className="text-xl hover:underline"
            >
              {board.title}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors hover:bg-gray-300">
                  <MaterialSymbol icon={"more_vert"} size={24} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="space-y-2">
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="flex gap-2 items-center cursor-pointer"
                  >
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="flex gap-2 items-center cursor-pointer text-wontdo-500"
                  >
                    Delete
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
        <Button className="self-start">Add new board</Button>
      </div>
    </Container>
  );
}
