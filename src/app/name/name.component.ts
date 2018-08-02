import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataContainerService } from '../data-container.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  message;
  data;
  showPassword = 'password';
  showCheck: boolean = true
  value: boolean;

  regForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.email, Validators.required]),
      pNumber: new FormControl('', [Validators.pattern('[0-9]*'), Validators.required]),
      gender: new FormControl('', [Validators.required,Validators.pattern('male|female|Male|Female|other')]),
      empId: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      cPassword: new FormControl('', Validators.required)
    }
  )

  check() {
    this.value = this.checkPass();
  }

  checkPass() {
    this.message = "Password doesn't match"
    if (this.regForm.value.password !== this.regForm.value.cPassword) {
      console.log(this.message);
      return true;
    }
    else
      console.log("right");
    return false;
  }

  showPass() {
    if (this.showCheck) {
      this.showPassword = "text";
      this.showCheck = false;
    }

    else {
      this.showPassword = "password";
      this.showCheck = true;
    }

  }

  submit() {
    console.log(this.regForm.controls.firstName.errors);
    console.log(this.regForm.controls.lastName.errors);
    console.log(this.regForm.controls.email.errors);
    console.log(this.regForm.controls.pNumber.errors);
    console.log(this.regForm.controls.empId.errors);
    console.log(this.regForm.controls.gender.errors);
    console.log(this.regForm.controls.password.errors);
    console.log(this.regForm.controls.cPassword.errors);

    // localStorage.setItem("formData",JSON.stringify(this.regForm.value));
    this.dataService.setData(this.regForm.value);
    this.router.navigate(['/display']);
  }

  constructor(
    private router: Router, private dataService: DataContainerService
  ) { }

  ngOnInit() {
    // let data=JSON.parse(localStorage.getItem("formData"));
    this.data = this.dataService.getData();
    if (this.router.url === '/update') {
      this.regForm.patchValue(
        {
          firstName: this.data.firstName,
          lastName: this.data.lastName,
          email: this.data.email,
          pNumber: this.data.pNumber,
          gender: this.data.gender,
          empId: this.data.empId,
          password: this.data.password,
          cPassword: this.data.cPassword
        }
      );


    }

  }

}
