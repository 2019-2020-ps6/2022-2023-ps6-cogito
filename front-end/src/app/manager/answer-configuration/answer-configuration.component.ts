import { Component } from '@angular/core';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-answer-configuration',
  templateUrl: './answer-configuration.component.html',
  styleUrls: ['./answer-configuration.component.scss']
})
export class AnswerConfigurationComponent {
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
}
