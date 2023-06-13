import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ConfigurationFixture extends E2EComponentFixture {

    getCreateConfigurationButton() {
        return this.page.getByTestId('addButton');
    }

    clickCreateConfigurationButton(numberOfClick = 1) {
        return this.getCreateConfigurationButton().click({ clickCount: numberOfClick });
    }
}