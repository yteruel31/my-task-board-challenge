import { createServerActionProcedure } from "zsa";
import { env } from "@/env";
import { assertAuthenticated } from "@/lib/session";
import { rateLimitByKey } from "@/lib/limiter";

function shapeErrors({ err }: any) {
  const isDev = env.NODE_ENV === "development";
  if (isDev) {
    console.error(err);
    return {
      code: err.code ?? "ERROR",
      message: `${isDev ? "DEV ONLY ENABLED - " : ""}${err.message}`,
    };
  } else {
    return {
      code: "ERROR",
      message: "Something went wrong",
    };
  }
}

export const authenticatedAction = createServerActionProcedure()
  .experimental_shapeError(shapeErrors)
  .handler(async () => {
    const user = await assertAuthenticated();
    await rateLimitByKey({
      key: `${user.id}-global`,
      limit: 10,
      window: 10000,
    });
    return { user };
  });
