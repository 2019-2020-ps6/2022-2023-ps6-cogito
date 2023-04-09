import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent {

  @Input() quiz : Quiz | undefined;

  constructor() { }

}
