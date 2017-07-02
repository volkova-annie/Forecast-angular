import { Component, Output, EventEmitter } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

@Component({
  selector: 'suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  cities: String[];
  value: String;

  @Output() selectCity = new EventEmitter<String>();

  private suggestionUrl() {
    return 'http://gd.geobytes.com/AutoCompleteCity?callback=JSONP_CALLBACK&q='+this.value;
  }

  constructor(private jsonp: Jsonp) {}

  ngOnInit() {
    this.value = '';
  }
  onType(event){
    const {value} = event.target;
    if (value.length > 2) {
      this.value = value;
      this.getSuggestions();
    }
  }
  onChoose(city) {
    this.selectCity.emit(city);
    this.value = city;
    this.cities = [];
  }
  getSuggestions(){
    this.jsonp.get(this.suggestionUrl())
      .forEach(res => {
        this.cities = res.json();
      })
  }
  hasCities(){
    return (typeof this.cities !== 'undefined' && this.cities.length > 0)
  }
}
