import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-tab-details',
  templateUrl: './menu-tab-details.component.html',
  styleUrls: ['./menu-tab-details.component.scss']
})
export class MenuTabDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  isVisible = false

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        if (params['id'] === 'new') {
          this.isVisible = true;
        } 
      },
    });
  }
}
