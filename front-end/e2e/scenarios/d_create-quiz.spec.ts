import { test } from '@playwright/test';
import { themeQuizCreation } from 'e2e/e2e.config';

// This file is here to test the playwright integration.
test.describe('Root to list-theme-quiz-page', () => {

  test('Home page',async ({page}) => {
    await page.goto(themeQuizCreation);
  })
});
