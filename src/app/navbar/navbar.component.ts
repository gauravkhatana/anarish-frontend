import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  scroll: number = 0;
  
   tabs = [
    "services",
    "portfolio",  
    "beliefs",
    "recommendations",
    "contact us" 
   ]
  constructor(private Route: Router){

    for(let x in this.tabs){
      console.log(x)
    }
    window.addEventListener('scroll', this.changeBg);
  }

  changeBg() {
    
    var navbar = document.getElementById('mainNav');
    var signIn = document.getElementById('signIn');
    this.scroll = window.scrollY;
    console.log('deepu,',this.scroll);

    if (this.scroll < 150) {
      navbar?.classList.add('bgColor');
      signIn?.classList.add('bgColorButton');
    } else {
      navbar?.classList.remove('bgColor');
      signIn?.classList.remove('bgColorButton');
    }
  }

  handletabs(tabValue: string){

    console.log(tabValue)

    this.Route.navigate([], { fragment: tabValue });
  }
  
}
