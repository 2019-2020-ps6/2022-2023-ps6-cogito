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

