import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule], // Add Angular Material modules
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  keyword: string = ''; // Add this property
  @Output() search = new EventEmitter<string>(); // Emit search keyword

  onSearch(): void {
    this.search.emit(this.keyword); // Emit the keyword
  }
}