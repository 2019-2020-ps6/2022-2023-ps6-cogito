import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { THEME_LIST } from "../mocks/theme.mock";

import { Theme } from "../models/theme.model";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private themeList: Theme[] = THEME_LIST.sort((a, b) => a.title.localeCompare(b.title));
    public themeList$: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>(this.themeList);
    public selectedTheme$: Subject<Theme> = new Subject<Theme>();

    constructor() {}


}