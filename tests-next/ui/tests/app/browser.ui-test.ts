import { expect, test } from '../../fixtures';

// The smallest browser test: each project (playwright.config.ts) opens the admin panel in its own
// browser, logged in as the default role (admin).
test('opens the admin panel in the browser of the project', async ({
  page,
  browserName,
}, testInfo) => {
  expect(browserName).toBe(testInfo.project.name);

  await page.goto('/admin');

  await expect(page.getByRole('heading', { name: /^Hello / })).toBeVisible();
});
