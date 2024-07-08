import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrl: './lms.component.scss'
})
export class LmsComponent {

  constructor(private router: Router) { }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio/5']);
  }


}
