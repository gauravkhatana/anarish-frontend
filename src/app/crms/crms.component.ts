import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crms',
  templateUrl: './crms.component.html',
  styleUrl: './crms.component.scss'
})
export class CrmsComponent {

  constructor(private router: Router) { }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio/3']);
  }

}
