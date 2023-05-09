import { Component, Renderer2  } from '@angular/core';

import { OnInit } from '@angular/core';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-create-configuration',
  templateUrl: './create-configuration.component.html',
  styleUrls: ['./create-configuration.component.scss'],
})

export class CreateConfigurationComponent implements OnInit {

  state: String = 'general';
  configuration: Configuration | undefined;
  fontFamily: string = "Arial";

  constructor(public configurationService : ConfigurationService, private renderer: Renderer2) {
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

  changeFontFamily() {
    this.renderer.setStyle(document.documentElement, '--font-family', 'Century Gothic');
  }

  changeFontSize() {
    this.renderer.setStyle(document.documentElement, '--font-size', '20px');
  }
  
}