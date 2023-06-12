import { createEnvironmentInjector } from '@angular/core';
import { test, expect } from '@playwright/test';
import { createPatientUrl, profilListUrl } from 'e2e/e2e.config';
import { CreatePatientFixture } from 'src/app/manager/creation_patient/create-patient.fixture';
import { ProfilListFixture } from 'src/app/manager/profil_list/profil-list.fixture';
import { PatientListFixture } from 'src/app/manager/profil_list/patient/patient-list.fixture';
import { CreationPatientComponent } from 'src/app/manager/creation_patient/page.component';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Quiz Feature', () => {

    test('Quiz Creation', async ({ page }) => {
        await page.goto(createPatientUrl);

        const createPatientFixture = new CreatePatientFixture(page);


        await expect(page).toHaveURL("http://localhost:4200/creation-patient-page");

        await test.step("should create a new patient", async () => {
            // Set patient information
            const patientName = "John Doe";
            const patientPicture = "https://media.istockphoto.com/id/153011771/fr/photo/joyeux-homme-senior.jpg?s=612x612&w=0&k=20&c=ZZaVlCF_-H5IcH2stl7ySuXBH7MLccgnuMnInd1DpRM=";
            const patientStage = "4";
            const patientBirthdate = "1940-01-01";

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
    
    test('Delete Quiz', async ({ page }) => {
        const patientListFixture = new PatientListFixture(page);
        await page.goto(profilListUrl);
        const johnDoeElement = await page.$('body:has-text("John Doe")');
        expect(johnDoeElement).toBeTruthy(); 
        
        
        const elements = document.querySelectorAll('app-patient-patient-delete');

        let targetElement;
        elements.forEach(element => {
        const text = element.textContent?.trim();
        if (text === 'John Doe') {
            targetElement = element;
        }
        });
});

        
        /**
        const deleteButton = await patientListFixture.getDeleteButton("John Doe");
        await deleteButton.click();
        expect(johnDoeElement).not.toBeTruthy();
        */
    });
}); 