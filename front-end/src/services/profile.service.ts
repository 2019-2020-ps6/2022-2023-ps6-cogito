import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { PROFILE_LIST } from '../mocks/profile-list-with-id.mock';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private profiles: Profile[] = PROFILE_LIST;
  private searchTerms = new Subject<string>();

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(PROFILE_LIST);

  public profileSelected$: Subject<Profile> = new Subject();

  constructor() {
  }

  addProfile(profile: Profile) {
    
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subjecta nouvelle valeur de la liste des quiz
    this.profiles.push(profile);
    this.profiles$.next(this.profiles);
  }

  deleteProfile(quiz: Profile) {
    this.profiles.forEach((value,index)=>{
      if(value.name == quiz.name) this.profiles.splice(index,1);
    });

    this.profiles$.next(this.profiles);
    console.log("ProfileService DELETE");
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

