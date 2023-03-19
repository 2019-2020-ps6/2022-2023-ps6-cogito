import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { QuizFormComponent } from '../quiz-form/quiz-form.component';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz | undefined;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    //this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id != null)
      this.quiz = this.quizService.getQuizById(parseInt(id));
    
    console.log("quizzzzz",this.quiz);
    //this.quizService.setSelectedQuiz(id);
  }

  updateQuiz(quiz : Quiz) {
    this.quizService.updateQuiz(quiz);
  }

}
