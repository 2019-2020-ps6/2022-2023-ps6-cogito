import { test, expect } from '@playwright/test';
import { createPatientUrl } from 'e2e/e2e.config';

// This file is here to test the creation of patient

test.describe('Create patient', () => {
    test('Create patient', async ({ page }) => {
      await page.goto(createPatientUrl);
      // Let's try with something you don't have in your page.
      const pageTitle = await page.getByRole('heading', { name: 'AGreatHeadingNameYouDontHave' });
      // It should not be visible as you don't have it in your page.
      expect(pageTitle).not.toBeVisible();
      // Test case pass? Means the playwright setup is done! Congrats!
    });
});