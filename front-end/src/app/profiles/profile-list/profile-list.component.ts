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
  }

  sortProfileList() {
    this.profileList = this.profileList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  profileSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  deleteProfile(profile: Profile){
    this.profileService.deleteProfile(profile);
    console.log("The profile ", profile.name, " has been deleted");
  }
}
