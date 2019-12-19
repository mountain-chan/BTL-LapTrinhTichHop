import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  activeElement = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  activeRoute(routeName: string): boolean {
    return this.router.url.toString().indexOf(routeName) !== -1;
  }

}
