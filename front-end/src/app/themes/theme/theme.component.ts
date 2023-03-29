import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/models/theme.model';

@Component({
    selector: 'app-themes-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
    @Input()
    theme: Theme | undefined;

    @Output()
    themeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() { }


    ngOnInit(): void { }

    selectProfile() {
        this.themeSelected.emit(true);
      }
}