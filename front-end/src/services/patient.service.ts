import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Patient } from "../models/patient.model";
import { serverUrl, httpOptionsBase } from "../configs/server.config";

@Injectable({
    providedIn: "root"
})
export class PatientService {
    private patientList: Patient[] = [];
    public patientList$: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
    public selectedPatient$: BehaviorSubject<Patient | undefined>
        = new BehaviorSubject<Patient | undefined>(undefined);
    private patientURL: string = serverUrl + "/patients/";

    constructor(private http: HttpClient) {
        this.retrievePatients();
    }

    retrievePatients(): void {
        this.http.get<Patient[]>(this.patientURL).subscribe(patients => {
            this.patientList = patients;
            this.patientList$.next(patients);
        });
    }

    selectPatient(patient: Patient): void {
        this.selectedPatient$.next(patient);
        console.log("Patient selected : ", patient.name);
    }

    noSelectedPatient(): void {
        this.selectedPatient$.next(undefined);
        console.log("Patient unselected");
    }

    addPatient(patient: {}): void {
        this.http.post<Patient>(this.patientURL, patient, httpOptionsBase).subscribe(patient => {
            this.retrievePatients();
            this.selectedPatient$.next(patient);
            console.log("Patient added : ", patient);
        });
    }

    deletePatient(patient: Patient): void {
        this.http.delete(this.patientURL + patient.id).subscribe(() =>
            this.retrievePatients()
        );
    }

    updatePatient(patient: Patient): void {
        this.http.put<Patient>(this.patientURL + patient.id, patient, httpOptionsBase).subscribe(patient => {
            this.retrievePatients();
            this.selectedPatient$.next(patient);
        });/*
        let index: number = this.patientList.findIndex(
            (patientInList: Patient): boolean => patientInList.id === patient.id);
        if (index !== -1) {
            this.patientList[index] = patient;
            this.patientList.sort((a, b) => a.name.localeCompare(b.name));
            this.patientList$.next(this.patientList);
            console.log("Patient updated : ", patient.name);
        }*/
    }
}
