import { E2EComponentFixture } from "e2e/e2e-component.fixture";

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

    fillNameTheme() {
        return this.page.fill('input#nameTheme', 'test');
    }
}