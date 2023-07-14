import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';

import { EventsComponent } from './events/events.component';
import { PlaysComponent } from './plays/plays.component';
import { SportsComponent } from './sports/sports.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ListYourShowComponent } from './list-your-show/list-your-show.component';
import { OffersComponent } from './offers/offers.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { BookingsComponent } from './bookings/bookings.component';




@NgModule({
  declarations: [
    ShowComponent,

    EventsComponent,
    PlaysComponent,
    SportsComponent,
    ActivitiesComponent,
    ListYourShowComponent,
    OffersComponent,
    GiftCardsComponent,
    BookingsComponent,



  
    
  ],
  imports: [
    CommonModule,
    ShowRoutingModule,
    
  ]
})
export class ShowModule { }
