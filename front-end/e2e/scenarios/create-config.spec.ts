import { createEnvironmentInjector } from '@angular/core';
import { test, expect } from '@playwright/test';
import { createPatientUrl, profilListUrl, listConfigUrl } from 'e2e/e2e.config';
import { CreatePatientFixture } from 'src/app/manager/creation_patient/create-patient.fixture';
import { ProfilListFixture } from 'src/app/manager/profil_list/profil-list.fixture';
import { ProfilFixture } from 'src/app/manager/profil/profil.fixture';
import { PatientListFixture } from 'src/app/manager/profil_list/patient/patient-list.fixture';
import { CreationPatientComponent } from 'src/app/manager/creation_patient/page.component';
import { InterfaceConfigurationFixture } from 'src/app/manager/interface-configuration/interface-configuration.fixture';
import { ConfigurationFixture } from 'src/app/manager/configuration/configuration.fixture';
import { CreateConfigurationFixture } from 'src/app/manager/create-configuration/create-configuration.fixture';





// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configuration Feature', () => {

    test('Configuration Creation', async ({ page }) => {
        await page.goto(profilListUrl);
        await expect(page).toHaveURL("http://localhost:4200/profil-list");

        await ProfilListFixture.getProfilButton(page);
        
        await expect(page).toHaveURL("http://localhost:4200/profil");

        await page.locator("#chooseConfig").click();

        await expect(page).toHaveURL("http://localhost:4200/configuration")

        await page.locator("#addButton").click();

        await expect(page).toHaveURL("http://localhost:4200/create-configuration")





    });

}); 