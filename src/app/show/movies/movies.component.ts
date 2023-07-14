import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies:any=[]
  constructor(private api:ApiService){}
ngOnInit(): void {
  this.api.getallmovies().subscribe({
    next:(res)=>{
      console.log(res);
      
      this.movies=res
    },
    error(error){
      console.log(error);
 
    }
  })

}


}
