import { Anchor } from "@/components/_ui/Anchor";
import { getBoardsByUserId } from "@/data-access/board";
import { assertAuthenticated } from "@/lib/session";

export default async function Page() {
  const user = await assertAuthenticated();

  const boards = await getBoardsByUserId(user.id);

  return (
    <div>
      <h1>List of boards</h1>
      {boards.map((board) => (
        <Anchor key={board.id} href={`/boards/${board.id}`}>
          {board.title}
        </Anchor>
      ))}
    </div>
  );
}
