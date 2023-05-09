import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Patient } from "src/models/patient.model";

@Component({
    selector: "app-patient-patient-delete",
    templateUrl: "./patient.component.html",
    styleUrls: ["./patient.component.scss"]
})
export class PatientDeleteComponent implements OnInit {
    @Input()
    patient!: Patient;

    @Output()
    selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();


    constructor() {
    }


    ngOnInit(): void {}

    selectPatient(): void {
        this.selectedPatient.emit(this.patient);
    }
}
