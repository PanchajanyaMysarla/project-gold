import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getCarsLarge() {
    return this.http.get<any>('/assets/data/cars-large.json')
      .pipe(map(cars => cars.data));
  }
}
