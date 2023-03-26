import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})

export class QuizListComponent implements OnInit{

  public quizzesList: Quiz[] | undefined;

  public qList = [
    { id: 1, name: 'Quiz 1', description: 'Géographie', questions: [] },
    { id: 2, name: 'Quiz 2', description: 'Histoire', questions: [] },
    { id: 3, name: 'Quiz 3', description: 'Musique', questions: [] },
  ];
  constructor(private quizService: QuizService) { 
  }

  ngOnInit(): void {
    this.quizzesList?.push(...this.qList);
  }

  deleteQuiz(id: number): void {
    //this.quizService.deleteQuiz(id);
    console.log('deleteQuiz', id)
    this.qList.filter(q => q.id !== id);
  }

}


