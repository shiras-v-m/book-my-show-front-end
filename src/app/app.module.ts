import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './show/home/home.component';
import { SignupComponent } from './show/signup/signup.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './show/signin/signin.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoviesComponent } from './show/movies/movies.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AdminSigninComponent } from './show/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './show/admin-signup/admin-signup.component';

// this home component is manually imported to get data in home
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    MoviesComponent,
    FilterPipe,
    AdminSigninComponent,
    AdminSignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule



  ],
  providers: [ 


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideToastr(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

