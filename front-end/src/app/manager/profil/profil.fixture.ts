import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Page } from '@playwright/test';

export class ProfilFixture extends E2EComponentFixture {

    // BUTTONS
    getChooseConfigButton() {
        return this.page.getByTestId('chooseConfig');    
    }

    clickChooseConfig(numberOfClick = 1){
        return this.getChooseConfigButton().click({ clickCount: numberOfClick });
    }
}