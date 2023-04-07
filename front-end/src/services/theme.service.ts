import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { THEME_MUSIQUE } from "src/mocks/theme.mock";
import { Theme } from "src/models/theme.model";


@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private themes: Theme[];
    private themesCopy: Theme[];
    public startIndex: number = 0;
    public endIndex: number;
    public themes$: BehaviorSubject<Theme[]>;
    public themeSelected$: Subject<Theme> = new Subject<Theme>();
    public start = true;
    public start$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public end = false;
    public end$: BehaviorSubject<boolean> = new BehaviorSubject(false);


    constructor() {
        this.themes = THEME_MUSIQUE;
        this.themesCopy = THEME_MUSIQUE;
        this.themes$ = new BehaviorSubject(this.themes);
        this.endIndex = this.themesCopy.length;
    }


    sortThemeList() {
        this.themes = this.themes.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.themes$.next(this.themes);
    }

    getThe6() {
        this.end$.next(false);
        if (this.startIndex > this.endIndex) this.startIndex = 0;
        if (this.startIndex < 0) {
            this.startIndex = this.endIndex - (((this.endIndex / 6) - Math.floor(
                this.endIndex / 6)) * 6);
        }
        if (this.startIndex + 6 > this.endIndex) {
            this.end$.next(true);

            this.themes = this.themesCopy.slice(this.startIndex, this.endIndex);
        }
        else {
            this.themes = this.themesCopy.slice(this.startIndex, this.startIndex + 6);
        }
        this.themes$.next(this.themes);
        if (this.startIndex == 0) {
            this.start$.next(true);
        }
        else {
            this.start$.next(false);
        }
    }

    showNextThemes() {
        this.startIndex += 6;
        this.getThe6();
    }

    showPreviousThemes() {
        this.startIndex -= 6;
        //if(this.startIndex < 0) this.startIndex = 0;
        this.getThe6();
    }

    getThemeById(id: number): Theme | undefined {
        return this.themes.find((theme) => theme.id === id);
    }

    updateTheme(theme: Theme) {
        console.log(theme);
        let index = this.themes.findIndex((t) => t.id === theme.id);
        console.log("index", index);
        this.themes[index] = theme;
        console.log(this.themes);
        this.themes$.next(this.themes);
    }

    setSelected(id: number) {

        let t = { ...this.themes.find((theme) => theme.id === id) } as Theme;
        if (t != undefined) {
            this.themeSelected$.next(t);
        }
    }
}