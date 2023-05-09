import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Patient } from "src/models/patient.model";

@Component({
    selector: "app-patient-patient",
    templateUrl: "./patient.component.html",
    styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
    @Input()
    patient!: Patient;

    @Output()
    selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();


    constructor() {
    }


    ngOnInit(): void {}

    selectPatient(): void {
        this.selectedPatient.emit(this.patient);
        console.log(this.patient);
        console.log(this.patient.configuration);
    }
}
