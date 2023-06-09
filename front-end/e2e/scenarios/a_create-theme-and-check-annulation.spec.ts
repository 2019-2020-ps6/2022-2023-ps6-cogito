import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
const { CreateThemeFixture } = require('src/app/theme/e2e-component.fixture Theme');

test.describe('Theme feature', () => {
  test('Create theme sucessfully', async ({ page }) => {

    const ThemeFixture = new CreateThemeFixture(page);

    await page.goto(testUrl);

    // Vérifier que vous êtes sur la page "home"
    await test.step('Verify current page is home-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('home-page');
    });

    await ThemeFixture.clickCommencer();

    // Vérifier que vous êtes sur la page "patient"
    await test.step('Verify current page is patient-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('patient-page');
    });

    await ThemeFixture.clickErgo();

    // Vérifier que vous êtes sur la page "menu"
    await test.step('Verify current page is menu-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('menu');
    });

    await ThemeFixture.clickquizAndTheme();

    // Vérifier que vous êtes sur la page "list-theme-quiz-page"
    await test.step('Verify current page is list-theme-quiz-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('list-theme-quiz-page');
    });

    await ThemeFixture.clickaddObject();

    await  ThemeFixture.fillNameTheme();

    const imageForAdd = 'data:image/jpeg;base64,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';
    await page.fill('input#imageTheme',imageForAdd);

    // Vérifier que vous êtes sur la page "theme-form"
    await test.step('Verify current page is theme-form', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('theme-form');
    });

    await ThemeFixture.clicksaveElement();

    // Vérifier que vous êtes sur la page "list-theme-quiz-page"
    await test.step('Verify current page is list-theme-quiz-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('list-theme-quiz-page');
    });


    await test.step('Verify the name of the added theme', async () => {
      const themeElements = await page.$$('ul#listThemeAndQuiz li');
      
      let themeNames = [];
      for (const element of themeElements) {
        const themeName = await element.textContent();
        themeNames.push(themeName.trim());
      }

      expect(themeNames).toContain('La Photographie');
    });

    await ThemeFixture.clickaddObject();

    await ThemeFixture.clickcancelElement();

    await test.step('Verify the name of the added theme', async () => {
      const themeElements = await page.$$('ul#listThemeAndQuiz li');
      
      let themeNames = [];
      for (const element of themeElements) {
        const themeName = await element.textContent();
        themeNames.push(themeName.trim());
      }

      let bool = true;
      if(themeNames.includes('Nouveau')){
        bool = false;
      }   

      expect(bool).toBeTruthy();
    });


  });
});