import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title= "anarish"
  isEmpty: boolean = false;


  tabs = [
   "services",
   "portfolio",
   "beliefs",
   "recommendations",
   "contact us" 
  ]
 constructor(private router: Router){
  }

  ngOnDestroy() {}

 

 handletabs(tabValue: String){

   console.log(tabValue)

   this.router.navigateByUrl('home/#portfolio')


 }


 
}


