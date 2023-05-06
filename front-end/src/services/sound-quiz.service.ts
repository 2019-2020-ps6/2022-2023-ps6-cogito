import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizSoundService {
  private audioElements: HTMLAudioElement[] = [];
  private isPlaying: boolean = false;

  playSound(soundUrl: string) {
    if (this.isPlaying){
      this.stopAllSounds();
    }
    const audio = new Audio(soundUrl);
    this.audioElements.push(audio);
    audio.play();
    this.isPlaying=true;
  }

  stopAllSounds() {
    this.audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    this.audioElements = [];
    this.isPlaying=false;
  }
}