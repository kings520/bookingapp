import { Injectable } from '@angular/core';
import { Place } from './place.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1', 'Manhatta Mansion', 'In the heart of New York City', 'https://bit.ly/30SwtvO', 144.99),
    new Place('p2', 'Manhatta Mansion 2', 'In the heart of New York City 2', 'https://bit.ly/30SwtvO', 155.99),
    new Place('p3', 'Manhatta Mansion 3', 'In the heart of New York City 3', 'https://bit.ly/30SwtvO', 165.99),
    new Place('p4', 'Manhatta Mansion 4', 'In the heart of New York City 4', 'https://bit.ly/30SwtvO', 185.99)
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id )};
  }
}
