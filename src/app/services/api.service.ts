import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model'; // Import Question from the correct location

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api/questions';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.API_URL);
  }

  getQuestionsByTheme(themeId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/theme/${themeId}`);
  }

  getQuestionsBySubTheme(subThemeId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/subtheme/${subThemeId}`);
  }

  getQuestionsByCategory(categoryId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/category/${categoryId}`);
  }

  searchQuestions(keyword: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/search?keyword=${keyword}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.API_URL, question);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.API_URL}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  flagQuestion(id: number): Observable<Question> {
    return this.http.put<Question>(`${this.API_URL}/flag/${id}`, {});
  }

  unflagQuestion(id: number): Observable<Question> {
    return this.http.put<Question>(`${this.API_URL}/unflag/${id}`, {});
  }

  findDuplicates(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/duplicates`);
  }

  removeDuplicates(ids: number[]): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/remove-duplicates`, ids);
  }

  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.API_URL}/upload`, formData);
  }

  downloadExcel(): Observable<Blob> {
    return this.http.get(`${this.API_URL}/download`, { responseType: 'blob' });
  }
}

// Export the Question interface using 'export type'
export type { Question };