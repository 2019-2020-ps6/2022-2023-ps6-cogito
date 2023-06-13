import { test } from '@playwright/test';
import { patientPageUrl } from 'e2e/e2e.config';
import { GamePageFixture } from 'src/app/game/page/game-page.fixture';

// This file is here to test the playwright integration.
test.describe('Play a quiz', () => {

  test('Go on quiz',async ({page}) => {
    await page.goto(patientPageUrl);

    await page.locator("app-patient-patient:first-child").click();

    await page.locator("app-theme-theme:first-child").click();

    await page.locator("app-quiz-quiz:first-child").click();
  })

  test('Play a quiz 2q with only good respond without correcting',async ({page}) => {
    await page.goto(patientPageUrl);

    await page.locator("app-patient-patient:first-child").click();

    await page.locator("app-theme-theme:first-child").click();

    await page.locator("app-quiz-quiz:first-child").click();


    await page.locator("button#true").click();

    await page.locator("button#true").click();

    const resultElement = await page.$('quizresult h1');
    const resulText = await resultElement?.innerText();

    

  })
});