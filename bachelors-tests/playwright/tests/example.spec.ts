import { expect } from "@playwright/test";
import { getCars as longStrings } from "../../extra-mocks/cars/getCars_long-strings";
import { getCars as lessCount } from "../../extra-mocks/cars/getCars_less-count";
import { test as extraTest, useDifferentMockData } from "../setup/global-setup";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

extraTest("Карточки изначально отображаются", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await sleep(1500);
  const r = await page.getByTestId("info");
  await sleep(1500);

  await expect(r).toHaveCount(10);
});

extraTest(
  "Если на странице всего 2 карточки, не рендерит кнопку 'показать еще'",
  async ({ page }) => {
    await useDifferentMockData(page, lessCount);

    await page.goto("http://localhost:3000/");
    await sleep(1500);
    const cards = await page.getByTestId("info");
    const button = await page.getByRole("button");
    await sleep(1500);
    await expect(cards).toHaveCount(2);
    await expect(button).not.toBeVisible();
  }
);

extraTest(
  "Корректно рендерит данные, если строки очень длинные",
  async ({ page }) => {
    await useDifferentMockData(page, longStrings);

    await page.goto("http://localhost:3000/");
    await sleep(1500);
    const r = await page.getByTestId("info");
    await sleep(1500);
    await expect(r).toHaveCount(10);
  }
);
