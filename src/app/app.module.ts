import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
