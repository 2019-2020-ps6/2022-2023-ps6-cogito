import { test, expect } from '@playwright/test';
import { testUrl, homePageUrl, patientPageUrl, themeQuizCreation, createPatientUrl, profilListUrl, createConfigUrl, listConfigUrl} from 'e2e/e2e.config';
import { CreateConfigurationFixture } from 'src/app/manager/create-configuration/create-configuration.fixture';
import { CreatePatientFixture } from 'src/app/manager/creation_patient/create-patient.fixture';
import { ProfilListFixture } from 'src/app/manager/profil_list/profil-list.fixture';
const { CreateThemeFixture } = require('src/app/theme/e2e-component.fixture Theme');

test.describe('Complete test', () => {


    test('Patient Creation', async ({ page }) => {
        await page.goto(testUrl);

        const createPatientFixture = new CreatePatientFixture(page);
        const ThemeFixture = new CreateThemeFixture(page);


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
    
        await ThemeFixture.clickPatientGestion();
        await ThemeFixture.clickPatientAdd();

        await expect(page).toHaveURL("http://localhost:4200/creation-patient-page");

        await test.step("should create a new patient", async () => {
            // Set patient information
            const patientName = "John Doe";
            const patientPicture = "https://media.istockphoto.com/id/153011771/fr/photo/joyeux-homme-senior.jpg?s=612x612&w=0&k=20&c=ZZaVlCF_-H5IcH2stl7ySuXBH7MLccgnuMnInd1DpRM=";
            const patientStage = "4";
            const patientBirthdate = "24-05-1940";

            // Fill patient form
            const inputName = await createPatientFixture.getNameInput();
            await inputName.type(patientName);
            const inputPicture = await createPatientFixture.getPictureInput();
            await inputPicture.type(patientPicture);
            const selectStage = await createPatientFixture.getStageSelect();
            await selectStage.selectOption({ label: patientStage });
            const inputBirthdate = await createPatientFixture.getBirthdateInput();
            await inputBirthdate.type(patientBirthdate);

            // Create patient
            await createPatientFixture.createPatient();
    
            // Verify patient creation
            const patient = await page.getByRole('heading', { name: patientName });
            expect(patient).toBeTruthy();
            await createPatientFixture.getAddButton();

            await expect(page).toHaveURL("http://localhost:4200/profil");

            // Need to check if the patient created contains the good informations

        });
    });


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
        const nameConfig = "aaaaa";
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


        await page.locator('#save').click();
        await expect(page).toHaveURL("http://localhost:4200/configuration")

    });
});