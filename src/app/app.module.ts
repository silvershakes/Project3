import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { StreamComponent } from './stream/stream.component';
import { EventsComponent } from './events/events.component';
import { SportsComponent } from './sports/sports.component';
import { CorporateComponent } from './corporate/corporate.component';
import { PlaysComponent } from './plays/plays.component';
import { OfferComponent } from './offer/offer.component';
import { ListyourshowComponent } from './listyourshow/listyourshow.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { SignupComponent } from './signup/signup.component';
import { MoviedescComponent } from './moviedesc/moviedesc.component';




@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    HomeComponent,
    MoviesComponent,
    StreamComponent,
    EventsComponent,
    SportsComponent,
    CorporateComponent,
    PlaysComponent,
    OfferComponent,
    ListyourshowComponent,
    GiftcardComponent,
    SignupComponent,
    MoviedescComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
