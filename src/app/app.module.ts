import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideShowComponent } from './Mycomponents/slide-show/slide-show.component';
import { TrendingComponent } from './Mycomponents/trending/trending.component';
import { ExclusiveComponent } from './Mycomponents/exclusive/exclusive.component';
import { NowshowingComponent } from './Mycomponents/nowshowing/nowshowing.component';
import { InternationalComponent } from './Mycomponents/international/international.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { AdvideoComponent } from './Mycomponents/advideo/advideo.component';
import { CrewComponent } from './Mycomponents/crew/crew.component';
import { AgencyComponent } from './Mycomponents/agency/agency.component';
import { ClientComponent } from './Mycomponents/client/client.component';
import { CollectionsComponent } from './Mycomponents/collections/collections.component';
import { AllcollectionsComponent } from './Mycomponents/allcollections/allcollections.component';
import { SubmitComponent } from './Mycomponents/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    TrendingComponent,
    ExclusiveComponent,
    NowshowingComponent,
    InternationalComponent,
    FooterComponent,
    AdvideoComponent,
    CrewComponent,
    AgencyComponent,
    ClientComponent,
    CollectionsComponent,
    AllcollectionsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
