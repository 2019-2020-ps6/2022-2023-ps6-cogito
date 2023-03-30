import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Profile } from 'src/models/profile.model';

@Component({
  selector: 'app-profiles-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  profile: Profile | undefined;

  @Output()
  profileSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  profileDeleted: EventEmitter<Profile> = new EventEmitter<Profile>();

  @Output()
  profileEdited: EventEmitter<Profile> = new EventEmitter<Profile>();


  constructor() { }


  ngOnInit() { }

  selectProfile():void {
    this.profileSelected.emit(true);
  }

  deleteProfile():void {
    console.log("this.deleteProfile");
    this.profileDeleted.emit(this.profile);
  }

  editProfile():void{
    console.log("this.editProfile");
    this.profileEdited.emit(this.profile);
  }
}
