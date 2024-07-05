import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-portfolio',
  templateUrl: './root-portfolio.component.html',
  styleUrls: ['./root-portfolio.component.scss']
})
export class RootPortfolioPageComponent implements OnInit {
  id: string | null = null;
  dataDetails: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to the route parameter changes
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    console.log(this.dataDetails, "dataDetails");
  }

  loadData(id: string) {
    // Load your data based on the id
    // This could involve fetching data from a server or accessing a local data source
    console.log(`Loading data for ID: ${id}`);
  }
}
