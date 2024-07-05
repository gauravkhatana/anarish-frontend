import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  scroll: number = 0;
  isEmpty: boolean = false;

  constructor(private router: Router) {}

  

  

 

  handletabs(tabValue: string) {
    this.router.navigate([], { fragment: tabValue });
  }
}
