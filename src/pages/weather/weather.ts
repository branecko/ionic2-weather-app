import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service';


@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather: any;
  city: String;
  state: String;
  searchStr: String;
  results: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.city = 'Bratislava';
    this.state = 'Slovakia';
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

}
