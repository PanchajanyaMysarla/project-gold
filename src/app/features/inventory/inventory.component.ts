import { Component, OnInit } from '@angular/core';
import { InventoryService } from './services/inventory.service';
import { SelectItem } from 'primeng/api';
import { Car } from './models/car';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products$;

  cars: Car[];

  selectedCar: Car;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.products$ = this.inventoryService.getCarsLarge();

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}

