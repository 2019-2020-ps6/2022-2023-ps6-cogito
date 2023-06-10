import { Component, OnInit } from "@angular/core";
import { Patient } from "src/models/patient.model";
import { PATIENT_ANDREA } from "src/mocks/patient.mock";
import { PatientService } from "src/services/patient.service";


@Component({
    selector: "app-profil",
    templateUrl: "./profil.component.html",
    styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
    patient: Patient;

    constructor(private patientService: PatientService) {
        this.patient = PATIENT_ANDREA;
    }

    ngOnInit(): void {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
            }
        });
    }
}
