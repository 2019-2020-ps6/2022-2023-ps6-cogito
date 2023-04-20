import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Theme } from "src/models/theme.model";

@Component({
    selector: "app-theme-theme",
    templateUrl: "./theme.component.html",
    styleUrls: ["./theme.component.scss"]
})
export class ThemeComponent implements OnInit {
    @Input()
    theme!: Theme;

    @Output()
    selectedTheme: EventEmitter<Theme> = new EventEmitter<Theme>();


    constructor() {}


    ngOnInit(): void {}

    selectTheme(): void {
        this.selectedTheme.emit(this.theme);
    }
}
