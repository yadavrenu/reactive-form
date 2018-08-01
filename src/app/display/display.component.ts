import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataContainerService } from '../data-container.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  myItem;

  display(){
    this.myItem=this.dataService.getData();
    // document.getElementById("display").innerHTML=this.myItem;
  }

  editForm(){
    this.router.navigate(['/update']);
  }

  constructor(private router: Router,private dataService:DataContainerService) { }

  ngOnInit() {
    this.display();
  }

}
