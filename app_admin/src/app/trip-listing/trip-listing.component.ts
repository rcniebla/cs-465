import { Component, OnInit, } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';

import { Trip } from '../models/trips';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers:[TripDataService]
})
export class TripListingComponent implements OnInit {
  

  trips: Trip[];
  message : string;

  constructor(
    private tripDataService: TripDataService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getTrips();
  }

  private getTrips(): void{
    this.message = 'Searching for trips';
    this.tripDataService.getTrips().then(foundTrips => {
      this.message = foundTrips.length > 0 ? '' : 'No trips found';
      this.trips = foundTrips;
    });
  }

  private addTrip(): void{
    this.router.navigate(['add-trip'])
  }

  onDeleteEvent(event: Event){
    this.getTrips();
  }

  public isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }
}
