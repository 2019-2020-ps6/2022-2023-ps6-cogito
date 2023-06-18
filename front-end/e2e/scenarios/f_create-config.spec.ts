import { test, expect } from '@playwright/test';
import { testUrl, profilListUrl } from 'e2e/e2e.config';
import { ProfilListFixture } from 'src/app/manager/profil_list/profil-list.fixture';
import { CreateConfigurationFixture } from 'src/app/manager/create-configuration/create-configuration.fixture';


// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configuration Feature', () => {

    test('Configuration Creation', async ({ page }) => {

        // On commence sur la liste des profils
        await page.goto(profilListUrl);
        await expect(page).toHaveURL(testUrl + "profil-list");
        await ProfilListFixture.getProfilButton(page)


        // On continue sur le profil
        await expect(page).toHaveURL(testUrl + "profil");
        await page.locator("#chooseConfig").click();


        // On continue sur la liste des configurations
        await expect(page).toHaveURL(testUrl + "configuration")
        await page.locator("#addButton").click();


        // On commence à créer la configuration
        await expect(page).toHaveURL(testUrl + "create-configuration")
        const createConfigurationFixture = new CreateConfigurationFixture(page);
        const nameConfig = "aaaaa";
        const descriptionConfig = "Description de la config";

        const inputName = await createConfigurationFixture.getNameInput();
        await inputName.type(nameConfig);

        const inputDescription = await createConfigurationFixture.getDescriptionInput();
        await inputDescription.type(descriptionConfig);

        await page.locator("#interface").click();
        await expect(page).toHaveURL(testUrl + "create-configuration")


        // Ensuite on passe sur l'interface
        await page.locator("#button3font").click();
        await page.locator("#button3size").click();

        await page.locator("#questions").click();
        await expect(page).toHaveURL(testUrl + "create-configuration")


        // Désormais on passe aux questions
        await page.check('#qcm');
        await page.check('#pic');
        await page.check('#sound');


        // Et pour finir, les réponses
        await page.locator('#answers').click();
        await page.check('#cwin');
        await page.check('#cdesc');
        await page.check('#cpic');
        await page.check('#cson');


        await page.locator('#save').click();
        await expect(page).toHaveURL(testUrl + "configuration")

    });

});
