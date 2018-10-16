import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './compartido/lbsdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
