import { Injectable } from '@angular/core';
import { ConfigurationComponent } from 'src/app/manager/configuration/configuration.component';
import { Configuration } from 'src/models/configuration.model';
import { CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5} from 'src/mocks/configuration.mock';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  selectedConfig: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>({} as Configuration);
  newConfig: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>({} as Configuration);

  emptyConfig: Configuration = {
    id: 0,
    name: '',
    description: '',

    fontFamily: 'Arial',
    fontSize: 20,
    theme: '',

    pictures: false,
    sounds: false,
    multipleAnswers: false,
    hints: false,
    timeDisplayHint: 10,
    difficulty: 3,
    againFalseQuestion: false,

    correctAnswerWindow: false,
    correctDescription: false,
    correctImage: false,
    correctSound: false,

    falseAnswerWindow: false,
    falseDescription: false,
    falseImage: false,
    falseSound: false

  } as Configuration;

  public static liste : Configuration[] = [CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5];

  constructor() {
    this.setConfigToDefault();
  }

  getSelectedConfig(): Observable<Configuration> {
    return this.selectedConfig.asObservable();
  }

  getNewConfig(): Observable<Configuration> {
    return this.newConfig.asObservable();
  }

  setNewConfig(newConfig: Configuration) {
    this.newConfig.next(JSON.parse(JSON.stringify(newConfig)));
  }

  setConfigToDefault() {
    this.newConfig = new BehaviorSubject<Configuration>(this.emptyConfig);
  }

  updateConfig(){};

  addNewConfig(){
    ConfigurationService.liste.push(this.newConfig.value);
    this.newConfig = new BehaviorSubject<Configuration>({} as Configuration);
  }

  getListe(){
    return ConfigurationService.liste;
  }
  
  setNewFontFamily(s: string){
   this.newConfig.value.fontFamily = s;
  }

  setNewFontSize(s: number){
   this.newConfig.value.fontSize = s;
  }
}