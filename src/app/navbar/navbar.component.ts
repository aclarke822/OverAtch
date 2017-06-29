import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  service = this.appService;

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  OnClick(value) {
    console.log(this.appService.searchPackage.user);
    console.log(this.appService.searchPackage.region);
    console.log(this.appService.searchPackage.platform);
  }
}
