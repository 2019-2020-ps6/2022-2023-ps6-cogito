import { Component, Input } from "@angular/core";

import { Theme } from "src/models/theme.model";

@Component({
    selector: "app-theme-theme",
    templateUrl: "./theme.component.html",
    styleUrls: ["./theme.component.scss"]
})
export class ThemeComponent {
    @Input()
    theme!: Theme;
}
