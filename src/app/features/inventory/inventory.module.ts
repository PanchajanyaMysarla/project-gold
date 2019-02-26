import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRoutingModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    PanelModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [RouterModule],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
