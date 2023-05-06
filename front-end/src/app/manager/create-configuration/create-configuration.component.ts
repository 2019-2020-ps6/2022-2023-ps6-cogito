import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Patient } from '../../../models/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';
import { ConfigurationComponent } from '../configuration/configuration.component';

@Component({
  selector: 'app-create-configuration',
  templateUrl: './create-configuration.component.html',
  styleUrls: ['./create-configuration.component.scss'],
})

export class CreateConfigurationComponent implements OnInit {
  state: String = 'general';
  configuration: Configuration | undefined;

  constructor(public configurationService : ConfigurationService) {
  };

  ngOnInit() {
    // subscribe to configurationService
    //this.configurationService.setConfigToDefault();
    this.configurationService.getNewConfig().subscribe((config: Configuration) => {
      this.configuration = config;
    });
  }

  addNewConfig(){
    console.log(this.configurationService.getNewConfig());
    this.configurationService.addNewConfig();
    console.log("bien été ajoutée");
  }

  changeState(state: String) {
    this.state = state;
  }
}