import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:3000/'; // substitua pela URL do seu backend

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, post);
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  addComment(postId: number, comment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${postId}/comment`, comment);
  }
  getPostsByAuthor(author: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/author/${author}`);
  }
}
