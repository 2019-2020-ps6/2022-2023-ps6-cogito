import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Patient } from "../models/patient.model";
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
    providedIn: "root"
})
export class PatientService {
    private patientList: Patient[] = [];
    public patientList$: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
    public selectedPatient$: BehaviorSubject<Patient | undefined>
        = new BehaviorSubject<Patient | undefined>(undefined);
    private patientURL: string = serverUrl + "/patients";

    constructor(private http: HttpClient) {
        this.http.get<Patient[]>(this.patientURL).subscribe(patients => {
            console.log("Dans requête http patient");
            this.patientList = patients;
            this.patientList$.next(patients);
            // console.log(this.patientList);
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

    addPatient(patient: Patient): void {
        if (!(this.patientList.findIndex(
            (patientInList: Patient): boolean => patientInList.id === patient.id) !== -1)) {
            this.patientList.push(patient);
            this.patientList.sort((a, b) => a.name.localeCompare(b.name));
            this.patientList$.next(this.patientList);
            console.log("Patient added : ", patient.name);
        }
        this.patientList.sort((a, b) => a.name.localeCompare(b.name));
        this.patientList$.next(this.patientList);
    }

    createNewPatient(): void {
        // trouver nouvel id pour le patient
        // prendre le premier id disponible
        let newId: number = 1;
        while (this.patientList.findIndex((patient: Patient): boolean => patient.id === newId) !== -1) {
            newId++;
        }
        // add to patientList
        let newPatient: Patient = {
            id: newId,
            name: "",
            birthdate: new Date(),
            stage: 0,
            picture: "",

            themeIdList: [],
            quizIdList: [],
            quizToPlayList: []
        };

        this.selectPatient(newPatient);
    }

    deletePatient(patient: Patient) {
        this.patientList = this.patientList.filter(
            (patientInList: Patient): boolean => patientInList.id !== patient.id);
        this.patientList$.next(this.patientList);
        console.log("Patient deleted : ", patient.name);
    }

    updatePatient(patient: Patient) {
        let index: number = this.patientList.findIndex(
            (patientInList: Patient): boolean => patientInList.id === patient.id);
        if (index !== -1) {
            this.patientList[index] = patient;
            this.patientList.sort((a, b) => a.name.localeCompare(b.name));
            this.patientList$.next(this.patientList);
            console.log("Patient updated : ", patient.name);
        }

    }

    getSelectedPatient(): BehaviorSubject<Patient | undefined> {
        return this.selectedPatient$;
    }
}
