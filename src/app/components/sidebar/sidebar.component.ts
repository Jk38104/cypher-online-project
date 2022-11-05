import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarItems: any[] = [
    "Exporter Name",
    "Importer Name",
    "Country of Destination",
    "Hs Code",
    "Hs Code Description",
    "Port of Discharge",
    "Port of Loading",
    "Mode of Port",
    "UQC",
    "Quantity"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
