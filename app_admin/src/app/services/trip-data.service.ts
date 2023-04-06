import { Injectable } from '@angular/core';
import { Trip } from '../models/trips';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseURL = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBaseURL}trips/`

  public addTrip(formData: Trip): Promise<Trip>{
    console.log("in service");
    return this.http
      .post(this.tripURL, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public getTrip(tripCode: string): Promise<Trip[]>{
    return this.http
      .get(this.tripURL+tripCode)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public getTrips(): Promise<Trip[]>{
    return this.http
      .get(this.tripURL)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public updateTrip(formData:Trip): Promise<Trip>{
    return this.http
      .put(this.tripURL + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public deleteTrip(tripCode: string):Promise<Trip>{
    return this.http
    .delete(this.tripURL+tripCode)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
