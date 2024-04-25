// @ts-check
import { test, expect } from '@playwright/test';
const exp = require('constants');

const LOCALHOST_URL = 'http://localhost:5173/'

test('get started link', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textcontent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textcontent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.length).toBeGreaterThan(0)
});
