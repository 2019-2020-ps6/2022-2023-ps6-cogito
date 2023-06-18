import { Component } from '@angular/core';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-question-configuration',
  templateUrl: './question-configuration.component.html',
  styleUrls: ['./question-configuration.component.scss']
})
export class QuestionConfigurationComponent {
  configuration: Configuration | undefined;
  difficulty: number | undefined;

  constructor(public configurationService : ConfigurationService) {
  };

  ngOnInit() {
    // subscribe to configurationService
    //this.configurationService.setConfigToDefault();
    this.configurationService.getNewConfig().subscribe((config: Configuration) => {
      this.configuration = config;
    });
  }

  public get difficultyAsNumber(): number {
    return this.difficulty as number;
  }
  
}
