import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PatientListFixture extends E2EComponentFixture {

    // Je veux récupérer le bouton du patient que je viens de créer
    getDeleteButton(patientName: string) {
        return this.page.waitForSelector(`button[title="Supprimer ${patientName}"]`);

    }
      
      

}