import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
count: any;
  constructor(private api:ApiService){}
  movies:any=[];

 
  ngOnInit(): void {
    this.getMovies()

  }
  getMovies(){
    this.api.getallmovies().subscribe({
      next:(response:any)=>{
        console.log(response)
        this.movies=response
        
      },
      error(error){
        console.log("error while getting movies");
        
      }
   
      
    })
   
  }
}
