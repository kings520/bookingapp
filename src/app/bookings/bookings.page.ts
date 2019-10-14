import {Component, OnInit} from '@angular/core';
import {BookingService} from "./booking.service";
import {Booking} from "./booking.module";
import {IonItemSliding} from "@ionic/angular";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];
  constructor(private  bookService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookService.bookings;
  }
  onCancelBookings(offerId: string, slidingBooking: IonItemSliding) {
    slidingBooking.close();
  }

}
