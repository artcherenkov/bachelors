import { test as base } from "@playwright/test";
import { BROWSER_INTERCEPT } from "../mocks";

export const useDifferentMockData = async (page, mock) => {
  await page.route(mock.url, (route) => {
    const method = route.request().method();
    route.fulfill(mock.response[method.toLowerCase()]);
  });
};

export const test = base.extend({
  page: async ({ page }, use) => {
    for (const mock of BROWSER_INTERCEPT) {
      await page.route(mock.url, (route) => {
        const method = route.request().method();
        route.fulfill(mock.response[method.toLowerCase()]);
      });
    }

    await use(page);
  },
});
