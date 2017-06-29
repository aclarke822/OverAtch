import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greetingMessage = 'OverAtch!!! Stop fertin around!';
  constructor(private appService: AppService) {}
}
