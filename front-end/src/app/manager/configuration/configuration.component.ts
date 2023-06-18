import { Component } from "@angular/core";
import { ConfigurationService } from "src/services/configuration.service";
import { Patient } from "../../../models/patient.model";
import { PatientService } from "../../../services/patient.service";

@Component({
    selector: "app-configuration",
    templateUrl: "./configuration.component.html",
    styleUrls: ["./configuration.component.scss"]
})
export class ConfigurationComponent {
    selectedPatient: Patient = {} as Patient;

    constructor(public configurationService: ConfigurationService, private patientService: PatientService) {
        this.patientService.selectedPatient$.subscribe(patient => {
            if (patient) {
                this.selectedPatient = patient;
            }
        });
    }

    ngOnInit() {
    }

}
