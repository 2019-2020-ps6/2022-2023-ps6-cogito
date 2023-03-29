import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { Router, RoutesRecognized, ActivationStart } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public title: string = "";
    public routeData: any;
    // subscribe to the title service
    

    constructor(private router: Router) { 
    }
    
    
    ngOnInit(): void {
        this.router.events.subscribe((data) => {
            if (data instanceof ActivationStart) {
                if(data.snapshot.data)
                    this.title = data.snapshot.data['title'];
            }
          });
        // console.log data of the route 
        // this.route.data.map((data: {title: string}) => this.title = data.title);
    }
}