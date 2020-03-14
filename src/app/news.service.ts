import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  key = 'a65429315e8a4bd58644f190c2af875b';
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.key);
   }

   initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.key);
   }

   getArticlesByID(source) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.key);
   }
}
