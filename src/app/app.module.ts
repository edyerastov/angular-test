import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {numsReducer} from "./redux/nums.reducer";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({numPage: numsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
