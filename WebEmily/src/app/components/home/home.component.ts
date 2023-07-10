import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    
  }

  navigateToPage(page: string){
    this.router.navigate([page]);
  }
constructor(private router : Router) {}
  

}


