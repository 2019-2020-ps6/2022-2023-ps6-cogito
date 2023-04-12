import { Component, Input } from "@angular/core";

import { Patient } from "src/models/patient.model";

@Component({
    selector: "app-patient-patient",
    templateUrl: "./patient.component.html",
    styleUrls: ["./patient.component.scss"]
})
export class PatientComponent {
    @Input()
    patient!: Patient;
}
