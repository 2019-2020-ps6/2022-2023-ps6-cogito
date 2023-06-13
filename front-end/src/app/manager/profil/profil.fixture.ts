import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Page } from '@playwright/test';

export class ProfilFixture extends E2EComponentFixture {

    // BUTTONS
    getChangesInfosButtons() {
        return this.page.getByTestId('changeInfos');
    }

    getChooseConfigButton() {
        return this.page.getByTestId('chooseConfig');    
    }

    getResultsButton(){
        return this.page.getByTestId('results');
    }

    clickChooseConfig(numberOfClick = 1){
        return this.getChooseConfigButton().click({ clickCount: numberOfClick });
    }
}