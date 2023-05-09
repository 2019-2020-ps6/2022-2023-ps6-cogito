import { Component, Renderer2  } from '@angular/core';

import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { PatientService } from 'src/services/patient.service';

@Component({
  selector: 'app-create-configuration',
  templateUrl: './create-configuration.component.html',
  styleUrls: ['./create-configuration.component.scss'],
})

export class CreateConfigurationComponent implements OnInit {
  Patient: any;

  state: String = 'general';
  configuration: Configuration | undefined;
  fontFamily: string = "Arial";


  displayButtonChoose = false;

  constructor(public configurationService : ConfigurationService, private renderer: Renderer2, public route : ActivatedRoute, private patientService : PatientService) {
    this.Patient = this.patientService.selectedPatient$;
  };

  ngOnInit() {
    // subscribe to configurationService
    //this.configurationService.setConfigToDefault();
    this.configurationService.getNewConfig().subscribe((config: Configuration) => {
      this.configuration = config;
    });
    this.displayButtonChoose = this.route.snapshot.data['displayButtonChoose'] || false;
  }

  addNewConfig(){
    console.log(this.configurationService.getNewConfig());
    this.configurationService.addNewConfig();
    console.log("bien été ajoutée");
  }

  changeState(state: String) {
    this.state = state;
  }

  changeFontFamily() {
    this.renderer.setStyle(document.documentElement, '--font-family', 'Century Gothic');
  }

  changeFontSize() {
    this.renderer.setStyle(document.documentElement, '--font-size', '20px');
  }

  updateConfiguration() {
    this.Patient.configuration = this.configuration;
    console.log(this.configuration);
    console.log(this.Patient.configuration);
    this.patientService.updatePatient(this.Patient);
  }
  
}