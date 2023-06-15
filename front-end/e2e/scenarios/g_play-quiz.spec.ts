import { test, expect } from '@playwright/test';
import { patientPageUrl } from 'e2e/e2e.config';

  test.describe('Play a quiz', () => {

  test('Play a quiz 2q with only good respond without correcting',async ({page}) => {
    // Go to patient profil
    await page.goto(patientPageUrl);

    // Select first patient and first quiz
    await page.locator("app-patient-patient:first-child").click();

    await page.locator("app-theme-theme:first-child").click();

    await page.locator("app-quiz-quiz:first-child").click();

    // Select wrong answer
    await page.locator("button#false").click();

    const corrFalse = await page.locator('corrwindow h3');
    // Verification of wrong answer correcting display
    expect(page.locator('corrwindow section')).toHaveClass('content wrong-background');
    const corrFalseText = await corrFalse?.innerHTML();

    await page.locator("corrwindow button").click();

    // Select right answer
    await page.locator("button#true").click();
    // Verification of right answer correcting display
    expect(page.locator('corrwindow section')).toHaveClass('content green-background');
    await page.locator("corrwindow button").click();

    await page.locator("button#true").click();
    // Verification of right answer correcting display
    expect(page.locator('corrwindow section')).toHaveClass('content green-background');
    const corrTrue = await page.locator('corrwindow h3');
    // Verification of question repeat
    const corrTrueText = await corrFalse?.innerHTML();

    expect(corrTrueText).toBe(corrFalseText);

    await page.locator("corrwindow button").click();

    // Display question recap
    const resultElement = await page.locator('quizresult .game-result-content h1');
    const resulText = await resultElement?.innerText();

    expect(resulText).toBe('Félicitations vous avez fini le quiz !');

    await page.locator('.game-result-content button').click();

    const headerElement = await page.locator('header h1');
    const headerText = await headerElement?.innerText();

    // Verification of quiz end
    expect(headerText).toBe('Choisissez un quiz');
    

  })
});