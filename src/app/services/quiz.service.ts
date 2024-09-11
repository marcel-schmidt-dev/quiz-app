import { Injectable } from '@angular/core';
import { QuizzesService } from './Quizzes.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quiz: any;
  category: any = null;
  questionIndex = new BehaviorSubject<number>(0);
  selectedAnswer: any = null;
  correctAnswers: number = 0;
  answerSubmitted: boolean = false;
  currentQuestionIndex = this.questionIndex.asObservable();

  constructor(private quizzesService: QuizzesService) {}

  setCategory(category: object) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  getActiveQuestion() {
    return this.quiz.questions[this.questionIndex.value].question;
  }

  getPossibleAnswers() {
    return this.quiz.questions[this.questionIndex.value].options;
  }

  getQuiz() {
    this.quiz = this.quizzesService.getQuizzesByCategory(this.category.title);
  }

  getMaxQuestionsIndex() {
    return this.quiz.questions.length;
  }

  getActiveQuestionIndex() {
    return this.questionIndex.value;
  }

  getSelectedAnswer() {
    return this.selectedAnswer;
  }

  setSelectedAnswer(index: number) {
    this.selectedAnswer = index;
  }

  getCorrectAnswerIndex() {
    const correctAnswer =
      this.quiz.questions[this.getActiveQuestionIndex()].answer;
    const answers = this.quiz.questions[this.getActiveQuestionIndex()].options;

    let answerIndex;

    answers.forEach((answer: string, index: any) => {
      if (answer === correctAnswer) {
        answerIndex = index;
      }
    });

    return answerIndex;
  }

  checkSelectedAnswer() {
    this.answerSubmitted = true;
    if (this.getCorrectAnswerIndex() === this.getSelectedAnswer()) {
      this.correctAnswers += 1;
    }
  }

  setNextQuestionIndex() {
    this.questionIndex.next(this.questionIndex.value + 1);
  }
}
