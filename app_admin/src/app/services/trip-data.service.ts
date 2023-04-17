import { Injectable, Inject } from '@angular/core';
import { Trip } from '../models/trips';
import { Http, Headers } from '@angular/http';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage,
  ){ }

  private apiBaseURL = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBaseURL}trips/`

  public addTrip(formData: Trip): Promise<Trip>{
    const header = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.storage.getItem('travlr-token')
    })
    console.log("in service");
    return this.http
      .post(this.tripURL, formData, {headers: header})
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
    const header = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.storage.getItem('travlr-token')
    })
    return this.http
      .put(this.tripURL + formData.code, formData, {headers: header})
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public deleteTrip(tripCode: string):Promise<Trip>{
    const header = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.storage.getItem('travlr-token')
    })
    return this.http
    .delete(this.tripURL+tripCode, { headers: header} )
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('register', user);
  }

  public makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse>{
    const url: string = `${this.apiBaseURL}/${urlPath}`;
    return this.http
      .post(url,user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError)
  }

}
