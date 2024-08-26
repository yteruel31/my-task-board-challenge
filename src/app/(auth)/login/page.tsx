import { Anchor } from "@/components/_ui/Anchor";
import { Container } from "@/components/_ui/Container";
import { Github } from "@/components/_ui/Icons";

export default async function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-4xl">Login</h2>
        <Anchor
          size="lg"
          variant="tertiary"
          href="/login/github"
          rightSection={<Github width={24} />}
        >
          Login with Github
        </Anchor>
      </div>
    </Container>
  );
}
