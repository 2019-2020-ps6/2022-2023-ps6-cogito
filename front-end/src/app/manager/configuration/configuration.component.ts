import { Component } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {

  constructor(public configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
