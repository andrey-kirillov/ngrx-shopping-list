import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ShoppingReducer} from './store/reducers/shopping.reducer';
import {ShoppingEffects} from './store/effects/shopping.effects';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffects]),
    StoreModule.forRoot({
      shopping: ShoppingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
