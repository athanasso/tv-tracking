import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiUrl = 'http://localhost:9101/api/v1/search/media';

  constructor(private http: HttpClient) { }

  getResult(title: string): Observable<any> {
    const formattedTitle = title.replace(/ /g, '%20');
    const url = `${this.apiUrl}/${formattedTitle}`;

    const headers = new HttpHeaders({
      'accept': 'application/json'
    });

    return this.http.get(url, { headers });
  }
}
