import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Page } from '@playwright/test';


export class CreateThemeFixture extends E2EComponentFixture {

    clickCommencer() {
        return this.page.getByRole('button', { name: 'COMMENCER' }).click();
    }

    clickErgo() {
        return this.page.click('figure#adminAccount');
    }

    clickquizAndTheme() {
        return this.page.click('p#quizAndTheme');
    }

    clickPatientAdd() {
        return this.page.getByRole('button', { name: 'NOUVEAU' }).click();
    }

    clickPatientGestion() {
        return this.page.click('p#profilList');
    }

    clickaddObject() {
        return this.page.click('a#addObject');
    }

    clicksaveElement() {
        return this.page.click('button#saveElement');
    }

    clickcancelElement() {
        return this.page.click('button#annulerElement');
    }

    clicksupprElement() {
        return this.page.click('a#supprObject');
    }
    

    clickEditElement() {
        return this.page.click('a#editObject');
    }

    fillNameTheme() {
        return this.page.fill('input#nameTheme', 'La Photographie');
    }

    fillNameTheme2() {
        return this.page.fill('input#nameTheme', 'Les Artistes du 21ème Siècle');
    }
}