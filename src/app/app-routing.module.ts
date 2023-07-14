import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './show/home/home.component';
import { SignupComponent } from './show/signup/signup.component';
import { SigninComponent } from './show/signin/signin.component';
import { BookingsComponent } from './show/bookings/bookings.component';
import { MoviesComponent } from './show/movies/movies.component';
import { AdminSigninComponent } from './show/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './show/admin-signup/admin-signup.component';

const routes: Routes = [
  // { path: 'show', loadChildren: () => import('./show/show.module').then(m => m.ShowModule) },
  
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'movies',component:MoviesComponent},
  {path:'adminSignin',component:AdminSigninComponent},
  {path:'adminSignup',component:AdminSignupComponent},
  {path:'bookings/:id',component:BookingsComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
