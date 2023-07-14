import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(MoviesArray:any[],searchKey:string,property:string): any[] {
    const result:any=[]
    if(!MoviesArray || searchKey=="" || property=="" ){
      return MoviesArray
    }

    MoviesArray.forEach((item:any)=>{
      
      
      if(item[property].trim().toLowerCase().includes(searchKey.trim().toLowerCase()) ){
        // console.log(item.name);
        return result.push(item)
     
      }
    })
   return result
  } 

}
