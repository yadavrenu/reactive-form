import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

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
      empId: new FormControl('',[Validators.minLength(4), Validators.required, Validators.maxLength(4)]),
      password: new FormControl('',Validators.required),
      cPassword: new FormControl('', )
    }
  )
 
  static matchPass(regForm: FormGroup) {
    let password = regForm.controls.password.value;
    let repeatPassword = regForm.controls.cPassword.value;

    if (repeatPassword.length <= 0) {
        return null;
    }

    if (repeatPassword !== password) 
        return false;
    else 
    return null ;   
    

}
  
  submit(){
    console.log(this.regForm.controls.firstName.errors);
    console.log(NameComponent.matchPass(this.regForm));
  }

  
  constructor() { }

  ngOnInit() {
    
  }

}
