import { test, expect } from '@playwright/test';
import { createPatientUrl, profilListUrl, listConfigUrl } from 'e2e/e2e.config';
import { ProfilListFixture } from 'src/app/manager/profil_list/profil-list.fixture';
import { CreateConfigurationFixture } from 'src/app/manager/create-configuration/create-configuration.fixture';
import { patientPageUrl } from 'e2e/e2e.config';
import { ConfigurationFixture } from 'src/app/manager/configuration/configuration.fixture';
import { PatientPageComponent } from 'src/app/patient/page/page.component';


// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configuration Testing', () => {

    test('Configuration Creation', async ({ page }) => {

        // On commence sur la liste des profils 
        await page.goto(profilListUrl);
        await expect(page).toHaveURL("http://localhost:4200/profil-list");
        await ProfilListFixture.getProfilButton(page)


        // On continue sur le profil
        await expect(page).toHaveURL("http://localhost:4200/profil");
        await page.locator("#chooseConfig").click();


        // On continue sur la liste des configurations
        await expect(page).toHaveURL("http://localhost:4200/configuration")
        await page.locator("#addButton").click();


        // On commence à créer la configuration
        await expect(page).toHaveURL("http://localhost:4200/create-configuration")
        const createConfigurationFixture = new CreateConfigurationFixture(page);
        const nameConfig = "nobadresponse";
        const descriptionConfig = "Description de la config";

        const inputName = await createConfigurationFixture.getNameInput();
        await inputName.type(nameConfig);

        const inputDescription = await createConfigurationFixture.getDescriptionInput();
        await inputDescription.type(descriptionConfig);

        await page.locator("#interface").click();
        await expect(page).toHaveURL("http://localhost:4200/create-configuration")


        // Ensuite on passe sur l'interface
        await page.locator("#button3font").click();
        await page.locator("#button3size").click();

        await page.locator("#questions").click();
        await expect(page).toHaveURL("http://localhost:4200/create-configuration")


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

        await page.uncheck('#wwin');

        await page.locator('#save').click();
        await expect(page).toHaveURL("http://localhost:4200/configuration")


        // Quiz crée, on passe au jeu du patient

        await page.goto(profilListUrl);

        await page.locator("app-patient-patient-delete:first-child").click();
        await expect(page).toHaveURL("http://localhost:4200/profil");

        await page.locator("#chooseConfig").click();
        await expect(page).toHaveURL("http://localhost:4200/configuration");

        await ConfigurationFixture.getRightConfig(page);
        await expect(page).toHaveURL("http://localhost:4200/create-configuration-with");

        await page.locator('#accept').click();
        await expect(page).toHaveURL("http://localhost:4200/configuration");

        await page.goto(patientPageUrl);

        












    });

}); 