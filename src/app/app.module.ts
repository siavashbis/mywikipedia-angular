import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [AppComponent, PageListComponent, SearchbarComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
