import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  topInputItem:any[] = [
    {label: "Type", placeholder: "Export"},
    {label: "Country", placeholder: "India"},
    {label: "Period", placeholder: ""}
  ];

  belowInputItem:any[] = [
    {isSearchable: false, placeholder: "Trafic Code"},
    {isSearchable: true, placeholder: "Select Product..."},
    {isSearchable: true, placeholder: "Select Supplier..."},
    {isSearchable: true, placeholder: "Select Buyer..."}
  ];

  buttonsItem:any[] = [
    {isBlue: true, label: "Record", unit: 12094},
    {isBlue: false, label: "Code", unit: 12094},
    {isBlue: false, label: "Exporters", unit: 12094},
    {isBlue: false, label: "Importers", unit: 12094},
    {isBlue: false, label: "Country", unit: 12094},
    {isBlue: false, label: "Record", unit: 12094}
  ];

  tableHeads:any[] = [
    "Date", "Hs Code", "Product", "Quantity", "Value",
    "UQC", "Currency", "Unit Price", "SB NO", "SB Date", "Ex Rate"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
