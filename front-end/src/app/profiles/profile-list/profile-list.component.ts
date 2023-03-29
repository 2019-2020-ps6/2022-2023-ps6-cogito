import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../models/profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  public profileList: Profile[] = [];


  constructor(public profileService: ProfileService) {
    this.profileService.profiles$.subscribe((profileList) => {
      this.profileList = profileList;
    });
  }

  ngOnInit() {
    this.sortProfileList();
    this.profileList = this.profileList.slice(0,6);
  }

  getThe6() {
    this.profileService.getThe6();
  }

  showNextProfiles() {
    this.profileService.showNextProfiles();
}

showPreviousProfiles() {
  this.profileService.showPreviousProfiles();
}


  sortProfileList() {
    this.profileService.sortProfileList();
  }

  profileSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

}
