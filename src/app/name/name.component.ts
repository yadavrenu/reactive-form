import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  regForm= new FormGroup(
    {
      firstName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('',[Validators.email,Validators.required]),
      pNumber: new FormControl('',[Validators.pattern('[0-9]*'),Validators.required]),
      gender: new FormControl('',Validators.required),
      empId: new FormControl('',[ Validators.required,Validators.pattern('[0-9]*')]),
      password: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      cPassword: new FormControl('',Validators.required)
    }
  )
  
  checkPass(){
  if(this.regForm.value.password!==this.regForm.value.cPassword)
  console.log("Password Doesn't match");
  else
  console.log("right")
  }

  submit(){
    console.log(this.regForm.controls.firstName.errors);
    console.log(this.regForm.controls.lastName.errors);
    console.log(this.regForm.controls.email.errors);
    console.log(this.regForm.controls.pNumber.errors);
    console.log(this.regForm.controls.empId.errors);
    console.log(this.regForm.controls.gender.errors);
    console.log(this.regForm.controls.password.errors);
    console.log(this.regForm.controls.cPassword.errors);

    localStorage.setItem("formData",JSON.stringify(this.regForm.value));
    this.router.navigate(['/display']);
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
