import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public title: string = "";


    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.route.data.map((data: {title: string}) => this.title = data.title);
    }
}