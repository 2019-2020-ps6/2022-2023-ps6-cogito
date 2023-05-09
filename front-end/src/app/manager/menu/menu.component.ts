import { Component, OnInit } from '@angular/core';
import { Location } from 'src/services/location.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{


  constructor(private location: Location) { }

  ngOnInit(): void {
    const location = [{path: window.location.href.split('/')[3], id: 0}];
    this.location.setHistory(location);
    console.log(this.location.getHistory());
  }
}
