import { test, expect } from '@playwright/test';
import { patientPageUrl } from 'e2e/e2e.config';

  test.describe('Play a quiz', () => {

//   test('Go on quiz',async ({page}) => {
//     await page.goto(patientPageUrl);

//     await page.locator("app-patient-patient:first-child").click();

//     await page.locator("app-theme-theme:first-child").click();

//     await page.locator("app-quiz-quiz:first-child").click();
//   })

  test('Play a quiz 2q with only good respond without correcting',async ({page}) => {
    await page.goto(patientPageUrl);

    await page.locator("app-patient-patient:first-child").click();

    await page.locator("app-theme-theme:first-child").click();

    await page.locator("app-quiz-quiz:first-child").click();


    await page.locator("button#false").click();

    const corrFalse = await page.locator('corrwindow h3');
    const corrFalseText = await corrFalse?.innerHTML();

    await page.locator("corrwindow button").click();

    await page.locator("button#true").click();

    await page.locator("corrwindow button").click();

    await page.locator("button#true").click();

    const corrTrue = await page.locator('corrwindow h3');
    const corrTrueText = await corrFalse?.innerHTML();

    expect(corrTrueText).toBe(corrFalseText);

    await page.locator("corrwindow button").click();

    const resultElement = await page.locator('quizresult .game-result-content h1');
    const resulText = await resultElement?.innerText();

    expect(resulText).toBe('Félicitations vous avez fini le quiz !');

    await page.locator('.game-result-content button').click();

    const headerElement = await page.locator('header');
    const headerText = await headerElement?.innerText();

    expect(headerText).toBe('Choisissez un quiz');
    

  })
});