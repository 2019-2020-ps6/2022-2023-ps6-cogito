import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/models/configuration.model';
import { CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5} from 'src/mocks/configuration.mock';
import { BehaviorSubject, Observable } from 'rxjs';

import { serverUrl, httpOptionsBase } from '../configs/server.config';


@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  selectedConfig: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>({} as Configuration);
  newConfig: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>({} as Configuration);

  globalFont: string = 'Arial';
  globalSize: number = 20;

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
    correctPicture: false,
    correctSound: false,

    wrongAnswerWindow: false,
    wrongDescription: false,
    wrongPicture: false,
    wrongSound: false

  } as Configuration;

  defaultConfig: Configuration = {
    id: 0,
    name: 'Default',
    description: 'None',

    fontFamily: 'Arial',
    fontSize: 20,
    theme: '',

    pictures: true,
    sounds: false,
    multipleAnswers: true,
    hints: false,
    timeDisplayHint: 10,
    difficulty: 3,
    againFalseQuestion: false,

    correctAnswerWindow: true,
    correctDescription: true,
    correctPicture: true,
    correctSound: true,

    wrongAnswerWindow: true,
    wrongDescription: false,
    wrongPicture: false,
    wrongSound: false

  } as Configuration;

  liste : Configuration[] = [CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5];

  private configurationUrl = serverUrl + '/configuration';
  private configurationPath = 'configuration';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveConfiguration();
    this.setConfigToDefault();
  }

  retrieveConfiguration() {
    this.http.get<Configuration[]>(this.configurationUrl).subscribe((configurationList) => {
      this.liste = configurationList;
    });
  }

  setSelectedConfiguration(configurationId: string): void {
    const urlWithId = this.configurationUrl + '/' + configurationId;
    this.http.get<Configuration>(urlWithId).subscribe((configuration) => {
      this.selectedConfig.next(configuration);
    });
  }

  addNewConfig(){
    this.http.post<Configuration>(this.configurationUrl, this.newConfig.value, this.httpOptions).subscribe(() => this.retrieveConfiguration());
    this.newConfig = new BehaviorSubject<Configuration>({} as Configuration);
    this.newConfig.next(this.defaultConfig);
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


  getListe(){
    return this.liste;
  }
  
  setNewFontFamily(s: string){
   this.newConfig.value.fontFamily = s;
  }

  setNewFontSize(s: number){
   this.newConfig.value.fontSize = s;
  }

  getNewFontFamily(){
    return this.newConfig.value.fontFamily;
  }

  getNewFontSize(){
    return this.newConfig.value.fontSize;
  }


  // Directive globale pour l'entièreté de l'application

  setGlobalFont (fontName: string) {
    this.globalFont = fontName;
    document.documentElement.style.setProperty('--font-family', fontName);
  }

  setGlobalSize (fontSize: number) {
    this.globalSize = fontSize;
    document.documentElement.style.setProperty('--font-size', fontSize + 'px');
  }
}