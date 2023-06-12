import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { PatientListFixture } from "src/app/manager/profil_list/patient/patient-list.fixture";

export class CreatePatientFixture extends E2EComponentFixture {

    getLabelInput() {
        return this.page.waitForSelector('app-question-form input[id="patientName"]');
    }

    getAddButton() {
        return this.page.getByRole('button', { name: 'Ajouter' });
    }

    clickAddButton(numberOfClick = 1) {
        return this.getAddButton().click({ clickCount: numberOfClick });
    }

    /**
    getAllAnswersInputs(type: string) {
        const selector = `app-question-form .answer-form input[type="${type}"]`;
        return this.page.$$(selector);
    }



    */

    getCancelButton() {
        return this.page.waitForSelector('button[routerLink="/profil-list"]');
    }

    getNameInput() {
        return this.page.waitForSelector('input#patientName');
    }

    getPictureInput() {
        return this.page.waitForSelector('input#patientPicture');
    }

    getStageSelect() {
        return this.page.waitForSelector('select#patientStage');
    }

    getBirthdateInput() {
        return this.page.waitForSelector('input#patientBirthdate');
    }

    getThemeListItems() {
        return this.page.$$('div.scrollList li');
    }

    createPatient() {
        return this.getAddButton().click();
    }

    updatePatient() {
        return this.getAddButton().click();
    }
}