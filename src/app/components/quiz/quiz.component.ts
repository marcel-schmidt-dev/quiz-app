import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { QuizzesService } from '../../services/quizzes.service';
import { QuizContainerComponent } from '../quiz-container/quiz-container.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeaderComponent, QuizContainerComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  quiz: any;
  questionIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizzesService
  ) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    this.quiz = this.quizService.getQuizzesByCategory(category!);
  }
}
