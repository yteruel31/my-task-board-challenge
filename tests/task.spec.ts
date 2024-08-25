import { expect, test } from "@playwright/test";
import { database } from "@/db";

test.describe("Task", () => {
  test.beforeAll(async () => {
    await database.user.create({
      data: {
        id: "playwright-test",
        github_id: 1,
        username: "test",
      },
    });

    await database.session.create({
      data: {
        id: "playwright-test",
        userId: "playwright-test",
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    });

    await database.board.create({
      data: {
        id: "playwright-test",
        userId: "playwright-test",
        title: "board-title",
        description: "board-description",
      },
    });
  });

  test.afterAll(async () => {
    await database.board.delete({
      where: {
        id: "playwright-test",
      },
    });
    await database.session.delete({
      where: {
        id: "playwright-test",
      },
    });
    await database.user.delete({
      where: {
        id: "playwright-test",
      },
    });
  });

  test("full flow of a task", async ({ page, request, context }) => {
    await context.addCookies([
      {
        name: "auth_session",
        value: "playwright-test",
        domain: "localhost",
        path: "/",
        httpOnly: true,
      },
    ]);

    await page.goto("./boards");

    await page.click("text=board-title");

    await page.click("text=Add new task");

    await page.fill('input[name="title"]', "task-title");

    await page.fill('textarea[name="description"]', "task-description");

    await page.getByLabel("headphone").click();

    await page.getByLabel("IN_PROGRESS").click();

    await page.getByRole("button", { name: "Save" }).click();

    await page.waitForURL(/\/boards\/playwright-test$/);

    await page.waitForSelector("text=task-title");

    expect(await page.isVisible("text=task-title")).toBeTruthy();

    await page.click("text=task-title");

    await page.fill('input[name="title"]', "task-title-updated");

    await page.getByRole("button", { name: "Save" }).click();

    await page.waitForURL(/\/boards\/playwright-test$/);

    await page.waitForSelector("text=task-title-updated");

    expect(await page.isVisible("text=task-title-updated")).toBeTruthy();

    await page.click("text=task-title-updated");

    await page.getByRole("button", { name: "Delete" }).click();

    await page.waitForURL(/\/boards\/playwright-test$/, { timeout: 5000 });

    await page.waitForSelector("text=task-title-updated", {
      state: "detached",
    });

    expect(await page.isVisible("text=task-title-updated")).toBeFalsy();
  });
});
