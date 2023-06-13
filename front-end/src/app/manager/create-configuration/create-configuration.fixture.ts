import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class CreateConfigurationFixture extends E2EComponentFixture {

    // BUTTONS
    getGeneralButton() {
        return this.page.getByRole('button', { name: 'General' });
    }

    getInterfaceButton() {
        return this.page.getByRole('button', { name: 'Interface' });
    }

    getQuestionsButton() {
        return this.page.getByRole('button', { name: 'Questions' });
    }

    getAnswersButton() {
        return this.page.getByRole('button', { name: 'Réponses' });
    }

    
    // INPUTS
    getNameInput() {
        return this.page.waitForSelector('input#name');
    }

    getDescriptionInput() {
        return this.page.waitForSelector('input#description');
    }
}