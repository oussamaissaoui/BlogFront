import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAllArticles():Observable<any>{

    return this.http.get('http://127.0.0.1:8000/api/getAllArticles');
    
  }

  getAllAuthors():Observable<any>{

    return this.http.get('http://127.0.0.1:8000/api/getAuthorList');
  }

  getOneArticle(id):Observable<any>{

    return this.http.get('http://127.0.0.1:8000/api/getOneArticle/'+id);
  }
}
