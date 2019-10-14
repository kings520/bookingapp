import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {Place} from '../place.module';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  listedPlaces: Place[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedPlaces = this.loadedPlaces.slice(1);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
