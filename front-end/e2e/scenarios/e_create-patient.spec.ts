import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { CreatePatientFixture } from 'src/app/manager/creation_patient/create-patient.fixture';
const { CreateThemeFixture } = require('src/app/theme/e2e-component.fixture Theme');


// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Patient Feature', () => {

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

        await expect(page).toHaveURL(testUrl + "creation-patient-page");

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

            await expect(page).toHaveURL(testUrl + "profil");

            // Need to check if the patient created contains the good informations

        });
    });

    test('Delete Patient', async ({ page }) => {
        /**
        const patientListFixture = new PatientListFixture(page);
        await page.goto(profilListUrl);
        const johnDoeElement = await page.$('body:has-text("Claude")');
        expect(johnDoeElement).toBeTruthy();
        const deleteButton = await patientListFixture.getDeleteButton("John Doe");
        await deleteButton.click();
        expect(johnDoeElement).not.toBeTruthy();
        */
    });
});
