import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Page } from '@playwright/test';

export class ProfilListFixture extends E2EComponentFixture {

    // Je veux récupérer le bouton du patient que je viens de créer
    // Il a pour balise <app-patient-patient-delete>
    // Et pour input le patient
    // Ici je veux récupérer le patient de nom John Doe

    static async getProfilButton(page: Page) {
        const deleteElements = await page.$$('app-patient-patient-delete');
        // Je prend le premier élément de deleteElements et je clique dessus

        await deleteElements[0].click();

        // Avant je cherchais la balise ci dessus qui contenait Alice
        // Puis je cliquais dessus
        // Mais je pense qu'il y a des problèmes avec la parallélisation
        
    }
}