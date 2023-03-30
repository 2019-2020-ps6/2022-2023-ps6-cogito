import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AdminQuiz } from '../../../models/admin-quiz.model';

@Component({
  selector: 'app-quizzes-admin-quiz',
  templateUrl: './admin-quiz.component.html',
  styleUrls: ['./admin-quiz.component.scss']
})
export class AdminQuizComponent implements OnInit {

  /**
   * Input here could be undefined, if the parent component doesn't give any quiz.
   * If you remove `undefined`, you will have an error saying:
   * "Property 'quiz' has no initializer and is not definitely assigned in the constructor."
   * We can also defined the initial value of the quiz in the constructor.
   */
  @Input()
  quiz: AdminQuiz | undefined;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDeleted: EventEmitter<AdminQuiz> = new EventEmitter<AdminQuiz>();

  @Output()
  quizEdited: EventEmitter<AdminQuiz> = new EventEmitter<AdminQuiz>();

  constructor() {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz() {
    console.log("this.deleteQuiz");
    this.quizDeleted.emit(this.quiz);
  }

  editQuiz(){
    console.log("this.editQuiz");
    this.quizEdited.emit(this.quiz);
  }
}
