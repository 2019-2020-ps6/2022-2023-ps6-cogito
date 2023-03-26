import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent {
  @Input() 
  public quiz: Quiz;

  // fait un output qui pour delete avec en parametre l'id du quiz selectionné
  @Output()
  public deleteQuiz: EventEmitter<number> = new EventEmitter<number>();

  public onDeleteQuiz(): void {
    this.deleteQuiz.emit(this.quiz.id);
  }
  
}
