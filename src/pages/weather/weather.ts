import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service';


@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather: any;
  zmw: any;
  searchStr: String;
  results: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getDefaultCity();
    this.getWeather();
  }

  getDefaultCity() {
    this.zmw = '10001.11.99999';
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  chooseLocation(location) {
    this.results = [];
    this.zmw = location.zmw;
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

}
