import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PatientListFixture extends E2EComponentFixture {
    // Je veux récupérer le bouton du patient que je viens de créer

    async getDeleteButton(patientName: string) {
        const deleteButton = await this.page.waitForSelector(
          `app-patient-patient-delete figcaption:has-text("${patientName}") ~ .btn-danger`
        );
      
        if (deleteButton === null) {
          throw new Error(`The delete button for patient "${patientName}" was not found.`);
        }
      
        return deleteButton;
      }
      
      

}