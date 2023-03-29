import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Profile } from '../../../models/profile.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile',
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

  constructor() {
  }

  ngOnInit() {
  }

  selectProfile() {
    this.profileSelected.emit(true);
  }

  deleteProfile() {
    console.log("this.deleteProfile");
    this.profileDeleted.emit(this.profile);
  }

  editProfile(){
    console.log("this.editProfile");
    this.profileEdited.emit(this.profile);
  }
}
