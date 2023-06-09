import { test, expect } from '@playwright/test';
import { homePageUrl, patientPageUrl, testUrl } from 'e2e/e2e.config';

// This file is here to test the playwright integration.
test.describe('Root to list-theme-quiz-page', () => {

  test('Home page',async ({page}) => {
    await page.goto(homePageUrl);

    const pageTitle = await page.$eval('h2', (element) => element.innerText);
    expect(pageTitle).toBe('Bienvenue sur Cogito Quiz !');
  })

  test('Enter on the site',async ({page}) => {
    await page.goto(homePageUrl);

    await page.getByRole('button',{name: 'COMMENCER'}).click();

    const adminElement = await page.$('#adminAccount');

    expect(await adminElement?.isVisible()).toBe(true);

    const patientList = await page.$('.rowListContainer');

    expect(await patientList?.isVisible()).toBe(true);
  })

  test('Go to admin + gerer les quiz',async ({page}) => {
    await page.goto(patientPageUrl);
    await page.click("figure#adminAccount");
    

    await test.step('Click on quizAndTheme', async () => {
        await page.click('p#quizAndTheme');
      });

  })

  test('Site tour',async ({page}) => {
    await page.goto(testUrl);
    
    // Go to menu page

    await page.getByRole('button',{name: 'COMMENCER'}).click();
    await page.click("figure#adminAccount");

    await test.step('Click on profilList', async () => {
      await page.click('p#profilList');
    });

    //complete tour in profil

    await page.getByRole('button',{name: 'RETOUR'}).click();

    await test.step('Click on quizAndTheme', async () => {
      await page.click('p#quizAndTheme');
    });

    //complete tour in quizAndTheme
    await page.getByRole('button',{name: 'RETOUR'}).click();

    //complete tour in game
    await page.getByRole('button',{name: 'RETOUR'}).click();
     await page.getByRole('button',{name: 'RETOUR'}).click();

    const pageTitle = await page.$eval('h2', (element) => element.innerText);
    expect(pageTitle).toBe('Bienvenue sur Cogito Quiz !');

  })
});