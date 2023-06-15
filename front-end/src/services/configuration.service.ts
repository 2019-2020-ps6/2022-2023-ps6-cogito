import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { ALL_CONFIGS, CONFIG_DEFAULT_3, CONFIG_DEFAULT_4, CONFIG_DEFAULT_5 } from "src/mocks/configuration.mock";
import { Configuration } from "src/models/configuration.model";
import { httpOptionsBase } from "../configs/server.config";


@Injectable({
    providedIn: "root"
})
export class ConfigurationService {
    globalFont: string = "Arial";
    globalSize: number = 20;

    defaultConfig: Configuration = {
        id: 0,
        name: "Defaut",
        description: "Aucune",

        fontFamily: "Arial",
        fontSize: 20,

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

    };
    newConfig: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>(this.defaultConfig);
    liste: Configuration[] = ALL_CONFIGS
    liste$: BehaviorSubject<Configuration[]> = new BehaviorSubject(ALL_CONFIGS);

    private configurationUrl = environment.apiUrl + "/configuration";

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) {
        this.retrieveAllConfigurations();
        this.setConfigToDefault();
    }

    retrieveAllConfigurations() {
        this.http.get<Configuration[]>(this.configurationUrl).subscribe((configurationList: Configuration[]) => {
            this.liste = configurationList;
            this.liste$.next(configurationList);
        });
        this.checkDefaultConfigs();
        return this.liste;
    }

    checkDefaultConfigs(): void {
        let index3 = this.liste.findIndex((config: Configuration) => config.name === CONFIG_DEFAULT_3.name);

        if (index3 === -1) {
            this.addConfig(CONFIG_DEFAULT_3);
        }

        let index4 = this.liste.findIndex((config: Configuration) => config.name === CONFIG_DEFAULT_4.name);
        if (index4 === -1) {
            this.addConfig(CONFIG_DEFAULT_4);
        }

        let index5 = this.liste.findIndex((config: Configuration) => config.name === CONFIG_DEFAULT_5.name);
        if (index5 === -1) {
            this.addConfig(CONFIG_DEFAULT_5);
        }
    }

    addNewConfig(): void {
        this.addConfig(this.newConfig.value);
        this.setConfigToDefault();
    }

    addConfig(config: Configuration): void {
        this.http.post<Configuration[]>(this.configurationUrl, config, this.httpOptions)
            .subscribe((configList) => {
                this.liste = configList;
                this.liste$.next(configList);
            });
    }

    getNewConfig(): Observable<Configuration> {
        return this.newConfig.asObservable();
    }

    setNewConfig(newConfig: Configuration): void {
        this.newConfig.next(JSON.parse(JSON.stringify(newConfig)));
    }

    setConfigToDefault(): void {
        this.newConfig.next(this.defaultConfig);
    }

    getListe(): Configuration[] {
        return this.liste;
    }

    setNewFontFamily(s: string) {
        this.newConfig.value.fontFamily = s;
    }

    setNewFontSize(s: number) {
        this.newConfig.value.fontSize = s;
    }

    // Directive globale pour l'entièreté de l'application
    setGlobalFont(fontName: string) {
        this.globalFont = fontName;
        document.documentElement.style.setProperty("--font-family", fontName);
    }

    setGlobalSize(fontSize: number) {
        this.globalSize = fontSize;
        document.documentElement.style.setProperty("--font-size", fontSize + "px");
    }
}
