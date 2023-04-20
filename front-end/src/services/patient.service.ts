import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { PATIENT_LIST } from "../mocks/patient.mock";
import { Patient } from "../models/patient.model";

@Injectable({
    providedIn: "root"
})
export class PatientService {
    private patientList: Patient[] = PATIENT_LIST.sort((a, b) => a.name.localeCompare(b.name));
    public patientList$: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>(this.patientList);
    public selectedPatient$: BehaviorSubject<Patient | undefined>
        = new BehaviorSubject<Patient | undefined>(undefined);

    constructor() {}

    selectPatient(patient: Patient): void {
        this.selectedPatient$.next(patient);
        console.log("Patient selected : ", patient.name);
    }
}