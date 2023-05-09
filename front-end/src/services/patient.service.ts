import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { PATIENT_LIST } from "../mocks/patient.mock";
import { Patient } from "../models/patient.model";
import { GameQuiz } from "src/models/gameQuiz.model";

import { CONFIG_DEFAULT_3} from "../mocks/configuration.mock";

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

    noSelectedPatient(): void {
        this.selectedPatient$.next(undefined);
        console.log("Patient unselected");
    }

    addPatient(patient: Patient): void {
        if (!(this.patientList.findIndex((patientInList: Patient): boolean => patientInList.id === patient.id) !== -1)) {
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
            age: 0,
            stage: 0,
            picture: "",
            statistics: {
                id: -1,
                // playedQuizList as a void Map<number, GameQuiz[]>
                playedQuizList: new Map<number, GameQuiz[]>(),
            },
            configuration: CONFIG_DEFAULT_3,

            quizResult: new Map<number, number[]>(),
            questionResult: new Map<number, boolean[]>(),

            themeIdList: [],
            quizIdList: [],
            quizToPlayList: [],
        };

        this.selectPatient(newPatient);
    }

    deletePatient(patient: Patient) {
        this.patientList = this.patientList.filter((patientInList: Patient): boolean => patientInList.id !== patient.id);
        this.patientList$.next(this.patientList);
        console.log("Patient deleted : ", patient.name);
    }

    updatePatient(patient: Patient) {
        let index: number = this.patientList.findIndex((patientInList: Patient): boolean => patientInList.id === patient.id);
        if (index !== -1) {
            this.patientList[index] = patient;
            this.patientList.sort((a, b) => a.name.localeCompare(b.name));
            this.patientList$.next(this.patientList);
            console.log("Patient updated : ", patient.name);
        }
        
    }
}