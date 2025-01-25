import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input() question: Question | null = null; // Input for the question
  @Output() submit = new EventEmitter<Question>(); // Output for form submission

  onSubmit(): void {
    if (this.question) {
      this.submit.emit(this.question); // Emit the question
    }
  }
}