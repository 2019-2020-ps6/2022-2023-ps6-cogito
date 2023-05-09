import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient.model';
import { PATIENT_ANDREA } from "src/mocks/patient.mock";
import { PatientService } from 'src/services/patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  Patient: Patient;
  link: string;

  constructor(private patientService: PatientService, private router: Router) {
    this.Patient = PATIENT_ANDREA;
    this.link = this.Patient.picture;
  }

  ngOnInit(): void {
    //s'abonne à patient et recupère le slectedPatient
    this.patientService.selectedPatient$.subscribe((patient?: Patient): void => {
      if (patient !== undefined) {
        this.Patient = patient;
      }
    });
  }
}
