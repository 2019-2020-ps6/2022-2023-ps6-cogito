import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Profile } from '../../../models/profile.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /**
   * Input here could be undefined, if the parent component doesn't give any quiz.
   * If you remove `undefined`, you will have an error saying:
   * "Property 'quiz' has no initializer and is not definitely assigned in the constructor."
   * We can also defined the initial value of the quiz in the constructor.
   */
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
