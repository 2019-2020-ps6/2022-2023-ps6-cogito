import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizSoundService {
  private audio?: HTMLAudioElement;
  private isPlaying: boolean = false;

  playSound(soundUrl: string) {
    if (this.isPlaying && this.audio){
      this.stopAllSounds();
    }
    this.audio = new Audio(soundUrl);
    this.audio.play();
    this.isPlaying=true;
  }

  stopAllSounds() {
    if (this.audio){
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = undefined;
      this.isPlaying=false;
    }
  }
}