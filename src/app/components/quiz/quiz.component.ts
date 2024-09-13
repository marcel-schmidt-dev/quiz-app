import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuizButtonComponent } from '../quiz-button/quiz-button.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { QuizService } from '../../services/Quiz.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizSummaryComponent } from '../quiz-summary/quiz-summary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    HeaderComponent,
    QuizButtonComponent,
    SubmitButtonComponent,
    QuizSummaryComponent,
    CommonModule,
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  category: any;
  question: string = '';
  activeQuestionIndex: number = 0;
  maxQuestionCount: number = 0;
  possibleAnswers: string[] = [];
  selectedAnswer: number | undefined;
  answerSubmitted: boolean = false;
  answerSelectable: boolean = true;
  correctAnswerIndex: number | void | undefined;
  noAnswerSelected: boolean = false;
  correctAnswers: number = 0;
  private subscription!: Subscription;

  constructor(private quizService: QuizService, private router: Router) {
    if (this.quizService.getCategory() === null) {
      this.router.navigate(['/']);
    } else {
      this.quizService.getQuiz();
    }
  }

  ngOnInit() {
    this.category = this.quizService.getCategory();
    this.maxQuestionCount = this.quizService.getMaxQuestionsIndex();
    this.loadCurrentQuestion();
    this.subscription = this.quizService.currentQuestionIndex.subscribe(
      (newValue) => {
        this.activeQuestionIndex = newValue;
      }
    );
    this.correctAnswerIndex = this.quizService.getCorrectAnswerIndex();
  }

  getLetterFromIndex(index: number) {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index];
  }

  onAnswerSelected(index: number) {
    if (this.answerSelectable) {
      this.selectedAnswer = index;
      this.quizService.setSelectedAnswer(index);
    }
  }

  checkAnswer() {
    if (this.selectedAnswer !== undefined) {
      this.answerSubmitted = true;
      this.answerSelectable = false;
      this.quizService.checkSelectedAnswer();
    }
    this.noAnswerSelected = true;
  }

  nextQuestion() {
    this.quizService.setNextQuestionIndex();
    if (this.activeQuestionIndex < this.maxQuestionCount) {
      this.loadCurrentQuestion();
    } else {
      this.correctAnswers = this.quizService.correctAnswers;
    }
  }

  loadCurrentQuestion() {
    this.question = this.quizService.getActiveQuestion();
    this.possibleAnswers = this.quizService.getPossibleAnswers();
    this.selectedAnswer = undefined;
    this.answerSubmitted = false;
    this.answerSelectable = true;
    this.noAnswerSelected = false;
    this.correctAnswerIndex = this.quizService.getCorrectAnswerIndex();
  }
}
