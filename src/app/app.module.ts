import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CatanComponent } from './catan/catan.component';
import { CatanConfigComponent } from './catan/config/config.component';
import { SplendorComponent } from './splendor/splendor.component';
import { SplendorConfigComponent } from './splendor/config/config.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    CatanComponent,
    CatanConfigComponent,
    SplendorComponent,
    SplendorConfigComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'catan', component: CatanComponent},
      {path: 'catan/config', component: CatanConfigComponent},
      {path: 'splendor', component: SplendorComponent},
      {path: 'splendor/config', component: SplendorConfigComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', component: WelcomeComponent},
      {path: '**', component: WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
