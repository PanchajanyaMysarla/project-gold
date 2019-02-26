import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/home'
      },
      {
        label: 'Jewelry',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Gold',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Neclace' },
              { label: 'Rings' },
            ]
          },
          {
            label: 'Silver',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Bracelets' },
              { label: 'Earrings' },
            ]
          },
          {
            label: 'Pearl',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'Neclace' },
              { label: 'Rings' },
            ]
          }
        ]
      }
    ];
  }

  addNewProduct() { }
}

