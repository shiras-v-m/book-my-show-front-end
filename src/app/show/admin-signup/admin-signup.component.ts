import { Component } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  constructor(private api:ApiService,private fb:FormBuilder,private route:Router){}
  signupForm=this.fb.group({

    email:['',[Validators.required]],
    pswd:['',[Validators.required]],
    confirmPswd:['',[Validators.required]],
  })
  signup(){
    if(this.signupForm.valid){

      let email=this.signupForm.value.email
      let pswd=this.signupForm.value.pswd
      let confirmPswd=this.signupForm.value.confirmPswd

      if(pswd!=confirmPswd){

        // this.toast.showWarning("Password does not match","Warning")
      }
      else{
        this.api.adminRegister(email,pswd).subscribe({
          next:(res)=>{
            console.log(res);
            
            alert(res)
            this.route.navigateByUrl('signin')
          },
          error:(error)=>{
            console.log(error.error);    
            alert(error.error)      
          }
        })
      }
    }
    else{

      // this.toast.showWarning("Please fill the form","Warning")
    }
  }
}
