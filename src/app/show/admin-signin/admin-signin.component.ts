import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent {
    signinData:any
    constructor(private api:ApiService,private fb:FormBuilder,private route:Router){}
    signinForm=this.fb.group({
  
      email:['',[Validators.required]],
      pswd:['',[Validators.required]],
   
    })
    signin(){
      if(this.signinForm.valid){
  
        let email=this.signinForm.value.email
        let pswd=this.signinForm.value.pswd
  
  
        
          this.api.adminLogin(email,pswd).subscribe({
            next:(res)=>{
              this.signinData=res
              console.log(this.signinData);
              // localStorage.setItem('email',email || '')
              
              alert(this.signinData.message)
              
              this.route.navigateByUrl('')
            },
            error:(error)=>{
              console.log(error.error);    
              alert(error.error)      
            }
          })
        }
  
      else{
  
        alert("Please fill the form")
      }
    }
  }
  

