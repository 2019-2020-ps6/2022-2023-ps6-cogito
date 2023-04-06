import { Component, OnInit } from "@angular/core";

import { Theme } from "src/models/theme.model";
import { ThemeService } from "src/services/theme.service";

@Component({
    selector: "app-themes-theme-list",
    templateUrl: "./theme-list.component.html",
    styleUrls: ["./theme-list.component.scss"]
})
export class ThemeListComponent implements OnInit {
    public themeList: Theme[] = [];

    public start = true;
    public end = false;


    constructor(public themeService: ThemeService) {
        this.themeService.themes$.subscribe((themeList) => {
            this.themeList = themeList;
        });
        this.themeService.start$.subscribe((start) => {
            this.start = start;
        });
        this.themeService.end$.subscribe((end) => {
            this.end = end;
        });
    }


    ngOnInit() {
        this.sortThemeList();
        this.themeList = this.themeList.slice(0, 6);
    }


    getThe6() {
        this.themeService.getThe6();
    }

    showNextThemes() {
        this.themeService.showNextThemes();
    }

    showPreviousThemes() {
        this.themeService.showPreviousThemes();
    }


    sortThemeList() {
        this.themeService.sortThemeList();
    }

    themeSelected(selected: boolean) {
        console.log("event received from child:", selected);
    }
}