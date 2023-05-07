import { Component, Input } from '@angular/core';
import { Configuration } from 'src/models/configuration.model';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-interface-configuration',
  templateUrl: './interface-configuration.component.html',
  styleUrls: ['./interface-configuration.component.scss']
})
export class InterfaceConfigurationComponent {
  selectedOption: string = 'option1';
  activeArray: any = [];
  @Input() fontSize: number = 16;

  newFontFamilySelected: string = "Arial";
  newFontSizeSelected: number = 20;
  newThemeSelected: string = "light";

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

  setFontFamily(fontFamily: string) {
    const element = document.getElementById('test1');
    if (element !== null) {
      element.style.fontFamily = fontFamily;
    }
  }

  setFontSize(fontSize: string) {
    const element = document.getElementById('test2');
    if (element !== null) {
      element.style.fontSize = fontSize;
    }
  }

  onButtonClick(event: MouseEvent) {
    console.log('Button clicked:', event.target);
    const buttonId = (event.target as HTMLButtonElement).id;
    this.lastFontFamilySelected(buttonId);
  }

  lastFontFamilySelected(buttonString: String) {
    if (buttonString == "button1font"){
      this.newFontFamilySelected = "Arial";  
    }
    else if (buttonString == "button2font"){
      this.newFontFamilySelected = "Optima";
    }
    else if (buttonString == "button3font"){
      this.newFontFamilySelected = "Century Gothic";
    }
    this.configurationService.setNewFontFamily(this.newFontFamilySelected);
    
  }

  lastFontSizeSelected(buttonString: String) {
    if (buttonString == "button1size"){
      this.newFontSizeSelected = 18;  
    }
    else if (buttonString == "button2size"){
      this.newFontSizeSelected = 20;
    }
    else if (buttonString == "button3size"){
      this.newFontSizeSelected = 22;
  }
  this.configurationService.setNewFontSize(this.newFontSizeSelected);
}
}
