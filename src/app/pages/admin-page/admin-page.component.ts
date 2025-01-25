import { Component, OnInit } from '@angular/core';
import { ApiService, Question } from '../../services/api.service';
import { MatCardModule } from '@angular/material/card';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { QuestionFormComponent } from '../../components/question-form/question-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, SearchBarComponent, QuestionFormComponent],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  questions: Question[] = [];
  duplicates: Question[] = [];
  selectedQuestion: Question | null = null;
  isEditing = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.apiService.getQuestions().subscribe((data) => (this.questions = data));
  }

  onSearch(keyword: string): void {
    this.apiService.searchQuestions(keyword).subscribe((data) => (this.questions = data));
  }

  onAddQuestion(question: Question): void {
    this.apiService.addQuestion(question).subscribe(() => this.fetchQuestions());
  }

  onUpdateQuestion(question: Question): void {
    this.apiService.updateQuestion(question.id, question).subscribe(() => this.fetchQuestions());
  }

  onDeleteQuestion(id: number): void {
    this.apiService.deleteQuestion(id).subscribe(() => this.fetchQuestions());
  }

  onFlagQuestion(id: number): void {
    this.apiService.flagQuestion(id).subscribe(() => this.fetchQuestions());
  }

  onUnflagQuestion(id: number): void {
    this.apiService.unflagQuestion(id).subscribe(() => this.fetchQuestions());
  }

  onEditQuestion(question: Question): void {
    this.selectedQuestion = question;
    this.isEditing = true;
  }

  onCancelEdit(): void {
    this.selectedQuestion = null;
    this.isEditing = false;
  }

  onFindDuplicates(): void {
    this.apiService.findDuplicates().subscribe((data) => (this.duplicates = data));
  }

  onRemoveDuplicates(): void {
    const ids = this.duplicates.map((q) => q.id);
    this.apiService.removeDuplicates(ids).subscribe(() => this.fetchQuestions());
  }
}