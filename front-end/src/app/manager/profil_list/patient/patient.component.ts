import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

import { Patient } from "src/models/patient.model";
import { PatientService } from "src/services/patient.service";

@Component({
    selector: "app-patient-patient-delete",
    templateUrl: "./patient.component.html",
    styleUrls: ["./patient.component.scss"]
})
export class PatientDeleteComponent implements OnInit {
    Show: boolean = false;

    @Input()
    patient!: Patient; 
    

    @Output()
    selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();
    @Output()
    deletedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();


    constructor(private patientService: PatientService, private router: Router) {

    }


    ngOnInit(): void {
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
            }
        }
        );
    }

    selectPatient(): void {
        this.selectedPatient.emit(this.patient);
    }

    deletePatient(): void {
        if (this.patient !== undefined) {
            this.patientService.deletePatient(this.patient);
            this.deletedPatient.emit(this.patient);
        }
    }

    afficher(): void {
        this.Show = !this.Show;
    }
}
