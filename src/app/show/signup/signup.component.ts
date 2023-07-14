import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private api:ApiService,private fb:FormBuilder,private route:Router){}
  signupForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(2)]],
    email:['',[Validators.required]],
    pswd:['',[Validators.required]],
    confirmPswd:['',[Validators.required]],
  })
  signup(){
    if(this.signupForm.valid){
      let name=this.signupForm.value.name
      let email=this.signupForm.value.email
      let pswd=this.signupForm.value.pswd
      let confirmPswd=this.signupForm.value.confirmPswd

      if(pswd!=confirmPswd){

        // this.toast.showWarning("Password does not match","Warning")
      }
      else{
        this.api.userRegister(name,email,pswd).subscribe({
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
