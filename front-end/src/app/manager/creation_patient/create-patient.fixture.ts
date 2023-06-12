import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class CreatePatientFixture extends E2EComponentFixture {
    getLabelInput() {
        return this.page.waitForSelector('app-question-form input[id="patientName"]');
    }

    getAddButton() {
        return this.page.getByRole('button', { name: 'Ajouter' });
    }

    getCreateButton() {
        return this.page.getByRole('button', { name: 'Create' });
    }

    /**
    getAllAnswersInputs(type: string) {
        const selector = `app-question-form .answer-form input[type="${type}"]`;
        return this.page.$$(selector);
    }



    */


    clickCreateButton(numberOfClick = 1) {
        return this.getCreateButton().click({ clickCount: numberOfClick });
    }
}