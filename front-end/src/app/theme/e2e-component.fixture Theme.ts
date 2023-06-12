import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class CreateThemeFixture extends E2EComponentFixture {

    clickCommencer() {
        return this.page.getByRole('button', { name: 'COMMENCER' }).click();
    }
}