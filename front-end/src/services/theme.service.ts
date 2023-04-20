import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { THEME_LIST } from "../mocks/theme.mock";
import { Patient } from "../models/patient.model";
import { Theme } from "../models/theme.model";
import { PatientService } from "./patient.service";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private themeList!: Theme[];
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);
    private selectedPatient: Patient | undefined;
    public selectedTheme$: Subject<Theme> = new Subject<Theme>();

    constructor(private patientService: PatientService) {
        this.patientService.selectedPatient$.subscribe((patient: Patient): void => {
            this.selectedPatient = patient;

            function patientThemeList(patient: Patient): Theme[] {
                let themeList: Theme[] = [];

                for (let themeId of patient.themeIdList) {
                    let index: number = THEME_LIST.findIndex((theme: Theme): boolean => theme.id === themeId);
                    themeList.push(THEME_LIST[index]);
                }

                themeList.sort((a, b) => a.title.localeCompare(b.title));
                return themeList;
            }

            this.themeList = patientThemeList(patient);
            this.themeList$.next(this.themeList);
        });
    }
}