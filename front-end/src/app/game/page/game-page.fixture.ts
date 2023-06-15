import { Page } from '@playwright/test';
import { E2EComponentFixture } from 'e2e/e2e-component.fixture';

export class GamePageFixture extends E2EComponentFixture {

    static clickOnRightAnswer(page: Page){
        page.locator("button#true").click();
    }

    async clickOnWrongAnswer(){
        await this.page.locator("button#false").click();
    }
}