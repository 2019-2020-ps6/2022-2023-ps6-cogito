import { Component, OnInit } from "@angular/core";

import { ProfileService } from "src/services/profile.service";
import { Profile } from "src/models/profile.model";

@Component({
    selector: "app-profiles-profile-list",
    templateUrl: "./profile-list.component.html",
    styleUrls: ["./profile-list.component.scss"]
})
export class ProfileListComponent implements OnInit {
    public profileList: Profile[] = [];
    public start = true;
    public end = false;


    constructor(public profileService: ProfileService) {
        this.profileService.profiles$.subscribe((profileList) => {
            this.profileList = profileList;
        });
        this.profileService.start$.subscribe((start) => {
            this.start = start;
        });
        this.profileService.end$.subscribe((end) => {
            this.end = end;
        });
    }

    ngOnInit() {
        this.sortProfileList();
        this.profileList = this.profileList.slice(0, 6);
    }

    getThe6() {
        this.profileService.getThe6();
    }

    showNextProfiles() {
        this.profileService.showNextProfiles();
        console.log(this.start);
    }

    showPreviousProfiles() {
        this.profileService.showPreviousProfiles();
        console.log(this.start);
    }

    sortProfileList() {
        this.profileService.sortProfileList();
    }

    profileSelected(selected: boolean) {
        console.log("event received from child:", selected);
    }

}
