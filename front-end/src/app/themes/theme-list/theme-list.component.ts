import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/models/theme.model';
import { ThemeService } from 'src/services/theme.service';

@Component({
    selector: 'app-themes-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
    public themeList: Theme[] = [];

    
    constructor(public themeService: ThemeService) {
        this.themeService.themeList$.subscribe((themes: Theme[]) => {
            this.themeList = themes;
        });
    }


    ngOnInit(): void { }
}