import { Component, OnInit } from '@angular/core';
import { ApiService, Question } from '../../services/api.service'; // Import ApiService
import { MatCardModule } from '@angular/material/card'; // Import Angular Material modules
import { SearchBarComponent } from '../../components/search-bar/search-bar.component'; // Import SearchBarComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, SearchBarComponent], // Add MatCardModule and SearchBarComponent
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  questions: Question[] = []; // Initialize the questions array

  constructor(private apiService: ApiService) {} // Use ApiService

  ngOnInit(): void {
    this.fetchQuestions(); // Fetch questions on component initialization
  }

  fetchQuestions(): void {
    this.apiService.getQuestions().subscribe((data) => (this.questions = data)); // Fetch all questions
  }

  onSearch(keyword: string): void {
    this.apiService.searchQuestions(keyword).subscribe((data) => (this.questions = data)); // Search questions
  }

  onFlagQuestion(id: number): void {
    this.apiService.flagQuestion(id).subscribe(() => this.fetchQuestions()); // Flag a question
  }
}