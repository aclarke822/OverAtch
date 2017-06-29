import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {HttpModule, JsonpModule} from '@angular/http';
import {UIRouterModule} from '@uirouter/angular';

import {AppStates} from './app.states';
import {AppService} from './app.service'
import {UIRouterConfigFn} from './app.router';
import {NavbarComponent} from './navbar/navbar.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: AppStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
