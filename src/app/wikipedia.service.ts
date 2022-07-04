import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
interface wikiserviceobservable {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;

    }[];
  };
}
//https://en.wikipedia.org/w/api.php? action=query& format=json& list=search& utf8=1& srsearch=space//
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  public search(term: string) {
    return this.http
      .get<wikiserviceobservable>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        }
      })
      .pipe(pluck('query', 'search'));
  }
}
