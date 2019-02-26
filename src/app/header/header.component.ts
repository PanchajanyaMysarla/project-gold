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
              {
                label: 'Neclace',
                routerLink: '/inventory/gold/neclace'
              },
              {
                label: 'Rings',
                routerLink: '/inventory/gold/rings'
              },
            ]
          },
          {
            label: 'Silver',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bracelets', routerLink: '/inventory/silver/bracelets'
              },
              {
                label: 'Earrings', routerLink: '/inventory/silver/earrings'
              },
            ]
          },
          {
            label: 'Pearl',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Neclace', routerLink: '/inventory/pearl/neclace'
              },
              {
                label: 'Rings', routerLink: '/inventory/pearl/rings'
              },
            ]
          }
        ]
      }
    ];
  }

  addNewProduct() { }
}

