import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { THEME_MUSIQUE } from "src/mocks/theme.mock";
import { Theme } from "src/models/theme.model";


@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeList: Theme[];
    public themeList$: BehaviorSubject<Theme[]>;
    public selectedTheme$: Subject<Theme>;


    constructor() {
        this.themeList = [THEME_MUSIQUE];
        this.themeList$ = new BehaviorSubject(this.themeList);
        this.selectedTheme$ = new Subject<Theme>();
    }
}