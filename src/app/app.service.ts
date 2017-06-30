import {Injectable, OnInit} from '@angular/core';
import overwatch from 'overwatch-js/lib/overwatch.js';

@Injectable()
export class AppService {
  PLATFORMS = ['Xbox', 'Playstation', 'PC'];
  REGIONS = ['US', 'EU'];
  searchPackage = {
    platform: '',
    region: '',
    user: ''
  };
  playerData = null;

  static formatRegion(region) {
    console.log(region);
    switch (region) {
      case 'EU':
        return 'eu';
      case 'US':
        return 'us';
    }
  }

  static formatPlatform(platform) {
    console.log(platform);
    switch (platform) {
      case 'Xbox':
        return 'xbl';
      case 'Playstation':
        return 'psn';
      case 'PC':
        return 'pc';
    }
  }

  getSearchPackage() {
    return this.searchPackage;
  }

  HandleData(data) {
    this.playerData = data;
    console.dir(this.playerData, {depth: 2, colors: true})
  }

  ScrapeData(platform, region, user) {
    overwatch
      .getAll(platform, region, user)
      .then((data) => this.HandleData(data));
  }

  Search() {
    this.ScrapeData(AppService.formatPlatform(this.searchPackage.platform),
      AppService.formatRegion(this.searchPackage.region),
      this.searchPackage.user)
  }
}


