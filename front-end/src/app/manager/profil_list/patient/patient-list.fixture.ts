import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PatientListFixture extends E2EComponentFixture {

    // Je veux récupérer le bouton du patient que je viens de créer
    getDeleteButton(patientName: string) {
        // return from tis.page element with tag a and id delete-{patientName}
        return this.page.waitForSelector(`a#delete_${patientName.replace(' ', '_')}`);
    }
      

}