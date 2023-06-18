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

    const themeListNb = await page.$$eval('#themeList ul#listThemeAndQuiz li', (elements) => elements.length);

    await test.step('Verify', async () => {
      const themeElements = await page.$$('#themeList ul#listThemeAndQuiz li');
      let bool = false;
      for (const element of themeElements) {
        const themeName = await element.textContent();
        if (themeName.trim() === "Musique") {
          const deleteLink = await element.$('div.buttons-side a#editObject');
          if (deleteLink) {
            await deleteLink.click();
            bool = true;
            break;
          }
        }
      }
      expect(bool).toBeTruthy();
    });

    // Vérifier que vous êtes sur la page "theme-form"
    await test.step('Verify current page is theme-form', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('theme-form');
    });

    await page.fill('input#nameTheme', 'La Musique');

    await ThemeFixture.clickcancelElement();

    // Vérifier que vous êtes sur la page "list-theme-quiz-page"
    await test.step('Verify current page is list-theme-quiz-page', async () => {
      const currentUrl = await page.url();
      expect(currentUrl).toContain('list-theme-quiz-page');
    });

    await test.step('Verify', async () => {
      const themeElements = await page.$$('#themeList ul#listThemeAndQuiz li');
      let bool = false;
      for (const element of themeElements) {
        const themeName = await element.textContent();
        if (themeName.trim() === "Musique") {
          const deleteLink = await element.$('div.buttons-side a#editObject');
          if (deleteLink) {
            await deleteLink.click();
            bool = true;
            break;
          }
        }
      }
      expect(bool).toBeTruthy();
    });

    const imageForAdd = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA6lBMVEX////+AAIQFXngAAANF3ARFXf///z//f/8//sQFXv75eIVFH0NFn8NF3YHCoE+QYH2/P7/+P8ECB5MRz4RFIH7AAdSQkPrDg5JAwL1BwA5OTk/SERDQ0MKCW3x8fECBS3YAADjAABFSi9BQGBBRFs+R01ARU9CRFNHQk9CQUdDQ0RARj1HQEEwTT5eQTldPT54MzFKenIMCmsLE1cIDWIODVkFAFdDQ2vx8+zv9Ovl+O313dXCAADWABPPAAADChcLGWQOEYw9QoALGm4ECRxURD4FDBNJTIABBQMABSYCBDE1PDY2NDlKAwEPeoZFAAACtElEQVR4nO3U21YTMRSA4XSazEw6TaGYAYYeGMCKUgQFPMuhlKIc+v6vY0ZcLq8126v/X7nI9bf23mp37/lgMnkxGcRuf29/OHz5ahi3g4PD6eHB66PjdZmGR2/eqrXRyenZ2dkocien795/GH8cC/RpPP785WtbpvP6YqG2Zz3nfc/byBWz3spqnqvYraZ5luWduiVTVe0cqUvtrpxLjI6cb0yiizyZ9NNOu1WKVFX1VN0Gk8QZHztti2sJEyVrUpYbA7Xme8nM+yKJ3DwZBZNMACVXYXfaQrsTTNaDiXc+MYlzzjQ542J8jfW9lX6aRhfJnkzE7klrZ6FuCq+74aDEvrFd29yT+ChZmqu+3JwEk2dqrTFJjI28OtY6IZM8lTQpMcEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDDBBBNMMMEEE0wwwQQTTDD5y/6HiffOW+uLyDnrr1ejg4TSPBM0af2eE2OsSRJjmvezf/4a54NJHn9MGpMs79StSqSy1Z6qS5PMjdYudtaH3ZEzkZqTqqqn6qYotHXOxK47EzWphUz+vCfdyOfEJoJzEu5JLbM6YXeqRZiT5p64JPacaDsK9yQ+ifDulGV7oW61u9LzuZ7rqM2v9Mk3AZFfdc43ZDrfuJiq79v3d9sS3d/fPW5J9LD1+HC8udwUablcDn4AcWIb64YWhIUAAAAASUVORK5CYII=';
    await page.fill('input#imageTheme',imageForAdd);

    await page.fill('input#nameTheme', 'Musique Française');

    await ThemeFixture.clicksaveElement();

    await test.step('Verify the name of the added theme', async () => {
      const themeElements = await page.$$('#themeList ul#listThemeAndQuiz li');
      
      let themeNames = [];
      for (const element of themeElements) {
        const themeName = await element.textContent();
        themeNames.push(themeName.trim());
      }

      expect(themeNames).toContain('Musique Française');
    });
  });
});