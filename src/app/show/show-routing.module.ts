import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EventsComponent } from './events/events.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { ListYourShowComponent } from './list-your-show/list-your-show.component';

import { OffersComponent } from './offers/offers.component';
import { PlaysComponent } from './plays/plays.component';
import { SportsComponent } from './sports/sports.component';



const routes: Routes = [{ path: '', component: HomeComponent },
{path:"activities",component:ActivitiesComponent},
{path:"events",component:EventsComponent},
{path:"gift-cards",component:GiftCardsComponent},
{path:"list-your-show",component:ListYourShowComponent},

{path:"offers",component:OffersComponent}, 
{path:"plays",component:PlaysComponent},
{path:"sports",component:SportsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
