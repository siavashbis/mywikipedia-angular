import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: Object[] = [];
  constructor(private wikipedia: WikipediaService) {}
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response) => {
      this.pages = response;
      console.log(this.pages);
    });
  }
}
