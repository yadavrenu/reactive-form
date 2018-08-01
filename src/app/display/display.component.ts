import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  display(){
    let myItem=JSON.parse(localStorage.getItem("formData"));
    document.getElementById("display").innerHTML=myItem;
   
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.display();
  }

}
