import { Page } from "@playwright/test";
import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ConfigurationFixture extends E2EComponentFixture {

    getCreateConfigurationButton() {
        return this.page.getByTestId('addButton');
    }

    clickCreateConfigurationButton(numberOfClick = 1) {
        return this.getCreateConfigurationButton().click({ clickCount: numberOfClick });
    }

    
    static async getRightConfig(page: Page) {
        const deleteElements = await page.$$('li');
        // Je prend le premier élément de deleteElements et je clique dessus

        for (const element of deleteElements) {
            const elementText = await element.textContent();
            if (elementText?.includes("nobadresponse")) {
                await element.click();
                break;
            }
        }
    }
}