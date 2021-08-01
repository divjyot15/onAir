import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideShowComponent } from './Mycomponents/slide-show/slide-show.component';
import { TrendingComponent } from './Mycomponents/trending/trending.component';
import { ExclusiveComponent } from './Mycomponents/exclusive/exclusive.component';
import { NowshowingComponent } from './Mycomponents/nowshowing/nowshowing.component';
import { InternationalComponent } from './Mycomponents/international/international.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    TrendingComponent,
    ExclusiveComponent,
    NowshowingComponent,
    InternationalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
