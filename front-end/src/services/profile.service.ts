import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { PROFILE_LIST } from '../mocks/profile-list-with-id.mock';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = PROFILE_LIST;
  private profilesCopy: Profile[] = PROFILE_LIST;
  public startIndex: number = 0;
  public endIndex: number = this.profilesCopy.length;
  public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(PROFILE_LIST);
  public profileSelected$: Subject<Profile> = new Subject();

  constructor() {
  }

  sortProfileList() {
    this.profiles = this.profiles.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    this.profiles$.next(this.profiles);
  }

  getThe6() {
    if(this.startIndex > this.endIndex) this.startIndex = 0;
    if(this.startIndex+6 > this.endIndex){
      this.profiles = this.profilesCopy.slice(this.startIndex, this.endIndex);
    }else{
      this.profiles = this.profilesCopy.slice(this.startIndex, this.startIndex + 6);
    }
    if(this.profiles.length != 6){
      for(let i = this.profiles.length; i < 6; i++){
        this.profiles.push({ id: 0 , name:"NOUVEAU PROFIL", age: 0, stage: 0, picture: "data:image/png;base64,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"});
      }
    }
    this.profiles$.next(this.profiles);
}

showNextProfiles() {
    this.startIndex += 6;
    this.getThe6();
}

showPreviousProfiles() {
  this.startIndex -= 6;
  if(this.startIndex < 0) this.startIndex = 0;
  this.getThe6();
}

  getProfileById(id: number): Profile | undefined {
    return this.profiles.find((profile) => profile.id === id);
  }

  updateProfile(profile: Profile) {
    console.log(profile)
    let index = this.profiles.findIndex((p) => p.id === profile.id);
    console.log("index",index);
    this.profiles[index] = profile;
    console.log(this.profiles)
    this.profiles$.next(this.profiles);
  }

  setSelected(id: number) {
  
    let p ={...this.profiles.find((profile) => profile.id === id)} as Profile;
    if(p != undefined)
      this.profileSelected$.next(p);
  }
}

