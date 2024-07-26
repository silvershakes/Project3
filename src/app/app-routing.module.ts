import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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




const routes: Routes = [
  {path:"activities",component:ActivitiesComponent  },
  {path:"home" , component:HomeComponent  },
  {path:"movies" , component:MoviesComponent  },
  {path:"stream" , component:StreamComponent  },
  {path:"events" , component:EventsComponent  },
  {path:"sports" , component:SportsComponent  },
  {path:"corporate" , component:CorporateComponent  },
  {path:"plays" , component:PlaysComponent  },
  {path:"offer" , component:OfferComponent  },
  {path:"listyourshow" , component:ListyourshowComponent  },
  {path:"giftcard" , component:GiftcardComponent  },
  {path:"signup" , component:SignupComponent  },
  {path:"moviedesc" , component:MoviedescComponent  },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
