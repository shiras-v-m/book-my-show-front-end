import { Component, OnInit } from '@angular/core';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchKey:any
  selectedMovie:any
  constructor(private api:ApiService,private route:Router){}
  loggedinUser:any=''

  control = new FormControl('');

  moviesArray:any=[]


  ngOnInit() {
    this.getMovies()
 
   
    this.loggedinUser=localStorage.getItem('email')
    if(this.loggedinUser){
      
    }
  }


  getMovies(){
    this.api.getallmovies().subscribe({
      next:(res)=>{
        console.log(res);
        this.moviesArray=res
      
        
      },
      error(error){
        console.log(error);
        
      }
    })
  }
}
