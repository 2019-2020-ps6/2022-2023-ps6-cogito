import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Patient } from "src/models/patient.model";
import { PatientPageListComponent } from "../profil_list/page.component";
import { PatientService } from "src/services/patient.service";


@Component({
    selector: "app-patient-form",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class CreationPatientComponent implements OnInit {
    patient?: Patient;
    originalpatient?: Patient;
    private patientList!: Patient[];

    data: any;


    constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.patientService.patientList$.subscribe((patientList: Patient[]): void => {
            this.patientList = patientList;
        });
        this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
            if (patient !== undefined) {
                this.patient = patient;
                this.originalpatient = JSON.parse(JSON.stringify(patient));
            }
        }
        );
        this.data = this.route.snapshot.data['title'];
    }


    savePatient(): void {
        if(!this.checkPatientValidity()){
            console.log("Question is not valid");
        }
        else {
            this.patientService.addPatient(this.patient as Patient);
        }
    }

    checkPatientValidity(): boolean {
        return this.patient?.name !== "" && this.patient?.age !== undefined && this.patient?.stage !== undefined && this.patient?.quizIdList !== undefined;
    }  
}
