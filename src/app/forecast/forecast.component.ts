import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Forecast } from './forecast';


@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  city: String;
  forecast: Forecast;

  private KEY='b84d6e69b39e4433a5ec8239e157c1d5';
  private forecastUrl() {
    return 'http://api.openweathermap.org/data/2.5/weather?appid='+this.KEY+'&q='+this.city+'&mode=json';
  }

  constructor(private http: Http) {}

  selectCity(city) {
    this.city = city;
      this.getForecast();
  }
  getForecast(){
    this.http.get(this.forecastUrl())
      .forEach(res => {
        const forecast = res.json()
        this.forecast = forecast;
      })
  }
  convertTemp(temp) {
    return (temp-273.15).toFixed(0).toString()
  }
  hasForecast(city) {
    return (typeof this.forecast !== 'undefined')
  }

}
