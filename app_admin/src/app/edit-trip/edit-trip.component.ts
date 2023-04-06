import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if(!tripCode){
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group ({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.tripService.getTrip(tripCode)
      .then(data => {
        this.editForm.patchValue(data[0]);
      })
  }

  onSubmit(){
    this.submitted = true;

    if(this.editForm.valid) {
      console.log(this.editForm.value);
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          this.router.navigate(['']);
        })
    }
  }

}
