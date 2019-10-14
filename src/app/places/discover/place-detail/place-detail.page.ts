import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import {Place} from "../../place.module";
import {PlacesService} from "../../places.service";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private router: Router, private placeService: PlacesService, private route: ActivatedRoute, private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if ((!paramMap.has(('placeId')))) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}}).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
    });
  }
}
