import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AdminQuizService } from '../../../services/admin-quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  @Input()
  public updatableQuiz : Quiz | undefined;

  public quizForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public quizService: AdminQuizService) {
    // Form creation
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme:['']
    });
  }

  ngOnInit() {
    console.log("updatableQuiz",this.updatableQuiz)
  }

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
      const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
      
      // Do you need to log your object here in your class? Uncomment the code below
      // and open your console in your browser by pressing F12 and choose the tab "Console".
      // You will see your quiz object when you click on the create button.
      console.log('Add quiz: ', quizToCreate);
      
      // Now, add your quiz in the list!
      if(this.updatableQuiz === undefined){
        this.quizService.addQuiz(quizToCreate);
        
      }else {
      this.updatableQuiz.name = quizToCreate.name;
      this.updatableQuiz.theme = quizToCreate.theme;
      console.log("update quiz");
      this.quizService.updateQuiz(this.updatableQuiz);

  }
    
  }

  

}
