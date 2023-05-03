import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient.model';
import { PATIENT_ANDREA } from "src/mocks/patient.mock";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  Patient: Patient;

  constructor() {
    this.Patient = PATIENT_ANDREA;
  }

  ngOnInit() {

  }

}
