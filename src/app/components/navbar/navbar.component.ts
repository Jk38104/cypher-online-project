import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: any[] = [
    "What's Trending",
    "Company Profile",
    "Hs code Analysis",
    "Country Analysis",
    "Port Analysis",
    "Custom Analysis"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
