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


    constructor(public profileService: ProfileService) {
        this.profileService.profiles$.subscribe((profileList: Profile[]): void => {
            this.profileList = profileList;
        });
    }


    ngOnInit(): void {
        this.sortProfileList();
        this.profileList = this.profileList.slice(0, 6);
    }

    getThe6(): void {
        this.profileService.getThe6();
    }

    showNextProfiles(): void {
        this.profileService.showNextProfiles();
    }

    showPreviousProfiles(): void {
        this.profileService.showPreviousProfiles();
    }


    sortProfileList(): void {
        this.profileService.sortProfileList();
    }

    profileSelected(selected: boolean): void {
        console.log("event received from child:", selected);
    }

}
