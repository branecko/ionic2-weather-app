import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service';

import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  results: any;
  searchStr: String;
  defaultLocation: String

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getDefaultLocation();
  }

  getDefaultLocation() {
    if(localStorage.getItem('location') != undefined) {
      this.defaultLocation = JSON.parse(localStorage.getItem('location')).name;
    }
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  setDefaultLocation(location) {
    this.results = [];

    localStorage.setItem('location', JSON.stringify(location));
    this.searchStr = location.name;
    this.getDefaultLocation();
  }

  saveChanges() {
    this.navCtrl.push(WeatherPage);
  }

}
