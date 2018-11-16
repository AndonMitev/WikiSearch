import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchArticlesService {
  constructor(private http: HttpClient) { }

  searchArticle(search): Observable<any> {
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}`);
  }
}
