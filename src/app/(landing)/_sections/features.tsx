import { MaterialSymbol } from "react-material-symbol-icons";
import { Container } from "@/components/_ui/Container";

const techClass =
  "text-foreground hover:scale-105 text-xs md:text-base text-center transition shadow-lg shadow-blue-400/50 rounded-xl drop-shadow-xl p-4 h-full flex flex-col justify-center items-center";

export function FeaturesSection() {
  return (
    <Container size="lg">
      <h2 className="max-w-6xl mx-auto text-4xl md:text-6xl text-center mb-12">
        So what&apos;s included in this Todo app?
      </h2>

      <p className="text-center text-lg md:text-2xl max-w-2xl mx-auto mb-12">
        This Todo app includes the frameworks, libraries, and tech I use most
        and believe in to be a great choice in regards to performance, ease of
        development, and customizability.
      </p>

      <ul className="md:max-w-6xl mx-auto grid grid-cols-3 md:px-12 leading-10 gap-6">
        <div className="flex flex-col gap-6">
          <li className={techClass}>
            <MaterialSymbol icon="code" /> Next.js 14 App Router
          </li>
          <li className={techClass}>
            <MaterialSymbol icon="lock" /> Authentication with Lucia-Auth
          </li>
        </div>
        <div className="flex flex-col gap-6">
          <li className={techClass}>
            <MaterialSymbol icon="database" />
            Prisma ORM
          </li>
          <li className={techClass}>
            <MaterialSymbol icon="deployed_code" /> Railway Deployments
          </li>
        </div>
        <div className="flex flex-col gap-6">
          <li className={techClass}>
            <MaterialSymbol icon="brush" /> Tailwind CSS
          </li>
          <li className={techClass}>
            <MaterialSymbol icon="labs" /> Integration-tests with Playwright
          </li>
        </div>
      </ul>
    </Container>
  );
}
