import { Component, HostListener, OnInit } from "@angular/core";

import { Theme } from "src/models/theme.model";
import { ThemeService } from "../../../services/theme.service";

@Component({
    selector: "app-theme-page",
    templateUrl: "./page.component.html",
    styleUrls: ["./page.component.scss"]
})
export class ThemePageComponent implements OnInit {
    private themeList!: Theme[];
    public displayThemeList: Theme[];
    private startDisplayInd: number = -1;
    private nbDisplayThemes: number = 0;
    private margin!: number;
    private size!: number;

    constructor(private themeService: ThemeService) {
        this.themeService.themeList$.subscribe((themeList: Theme[]): void => {
            this.themeList = themeList;
        });
        this.maxMargin();
        this.currentSize();
        this.nbDisplayThemes = this.numberRowThemes() * this.numberColThemes();
        this.displayThemeList = [];
    }

    maxMargin(): void {
        this.margin = Math.max(window.innerWidth * 0.04, window.innerHeight * 0.04, 20);
    }

    currentSize(): void {
        let minSize: number = 130 + this.margin;
        this.size = Math.max(minSize, Math.floor(Math
            .min(window.innerWidth * 0.20 + this.margin, window.innerHeight * 0.20 + this.margin)));
    }

    numberRowThemes(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerWidth * 0.6) / this.size));
    }

    numberColThemes(): number {
        if (window.innerWidth < 700) {
            return 1;
        }
        return Math.max(1, Math.floor((window.innerHeight * (0.65*0.9)) / (this.size + 32)));
    }

    ngOnInit(): void {
        this.nextDisplayThemes();
    }

    @HostListener("window:resize")
    onWindowResize(): void {
        this.maxMargin();
        this.currentSize();
        this.startDisplayInd = -1;
        this.nbDisplayThemes = this.numberRowThemes() * this.numberColThemes();
        this.nextDisplayThemes();
    }

    hasNextOrPrevButtons(): boolean {
        return this.nbDisplayThemes < this.themeList.length;
    }

    nextDisplayThemes(): void {
        if (this.startDisplayInd == -1 || (this.startDisplayInd + this.nbDisplayThemes > this.themeList.length)) {
            this.startDisplayInd = 0;
        }
        else {
            this.startDisplayInd += this.nbDisplayThemes;
        }
        this.displayThemeList = this.themeList
                                    .slice(this.startDisplayInd, this.startDisplayInd + this.nbDisplayThemes);
    }

    prevDisplayThemes(): void {
        let tabLenght: number = this.themeList.length;
        let remLenght: number;
        if (this.startDisplayInd <= 0) {
            remLenght = tabLenght % this.nbDisplayThemes;
            this.startDisplayInd = tabLenght - ((remLenght == 0) ? this.nbDisplayThemes : remLenght);
        }
        else {
            remLenght = this.nbDisplayThemes;
            this.startDisplayInd -= remLenght;
        }
        this.displayThemeList = this.themeList
                                    .slice(this.startDisplayInd, this.startDisplayInd + remLenght);
    }
}
