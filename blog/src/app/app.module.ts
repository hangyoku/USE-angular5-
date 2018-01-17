import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PreloadingService} from "./shared/services/pre-loading.service";
import {HttpClientModule} from "@angular/common/http";
import {MainService} from "./shared/services/main.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PreloadingService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
