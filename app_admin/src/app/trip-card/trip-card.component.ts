import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from '../models/trips';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip : any;
  @Output() deleteEvent = new EventEmitter<string>();
  
  constructor( 
    private router: Router,
    private authService: AuthenticationService,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
  }

  private editTrip(trip: Trip): void{
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void{
    this.tripService.deleteTrip(trip.code)
      .then(data => {
        this.router.navigate(['']);
      })
    this.deleteEvent.emit();
  }

  public isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }
}
