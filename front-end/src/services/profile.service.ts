import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Profile } from "../models/profile.model";
import { PROFILE_LIST } from "../mocks/profile.mock";

@Injectable({
    providedIn: "root"
})
export class ProfileService {
    private profiles: Profile[];
    private profilesCopy: Profile[] = PROFILE_LIST;
    public startIndex: number = 0;
    public endIndex: number = this.profilesCopy.length;
    public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(PROFILE_LIST);
    public profileSelected$: Subject<Profile> = new Subject();

    constructor() {
        this.profiles = PROFILE_LIST;
    }

    sortProfileList(): void {
        this.profiles = this.profiles.sort((a: Profile, b: Profile): number => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.profiles$.next(this.profiles);
    }

    getThe6(): void {
        if (this.startIndex > this.endIndex) this.startIndex = 0;
        if (this.startIndex + 6 > this.endIndex) {
            this.profiles = this.profilesCopy.slice(this.startIndex, this.endIndex);
        }
        else {
            this.profiles = this.profilesCopy.slice(this.startIndex, this.startIndex + 6);
        }
        this.profiles$.next(this.profiles);
    }

    showNextProfiles(): void {
        this.startIndex += 6;
        this.getThe6();
    }

    showPreviousProfiles(): void {
        this.startIndex -= 6;
        if (this.startIndex < 0) this.startIndex = 0;
        this.getThe6();
    }


    deleteProfile(quiz: Profile): void {
        this.profiles.forEach((value: Profile, index: number): void => {
            if (value.name == quiz.name) this.profiles.splice(index, 1);
        });

        this.profiles$.next(this.profiles);
        console.log("ProfileService DELETE");
    }

    getProfileById(id: number): Profile | undefined {
        return this.profiles.find((profile: Profile): boolean => profile.id === id);
    }

    updateProfile(profile: Profile): void {
        console.log(profile);
        let index: number = this.profiles.findIndex((p: Profile): boolean => p.id === profile.id);
        console.log("index", index);
        this.profiles[index] = profile;
        console.log(this.profiles);
        this.profiles$.next(this.profiles);
    }

    setSelected(id: number): void {
        let p: Profile = { ...this.profiles.find((profile: Profile): boolean => profile.id === id) } as Profile;
        if (p != undefined) {
            this.profileSelected$.next(p);
        }
    }
}

