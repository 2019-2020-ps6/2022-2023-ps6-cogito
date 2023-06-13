import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class CreateConfigurationFixture extends E2EComponentFixture {

    // BUTTONS
    getFontFamilyButton() {
        return this.page.getByTestId('button3font');
    }

    getFontSizeButton() {
        return this.page.getByTestId('button3size');    
    }

}