import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AppUtilityService } from './app.utility.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-with-fun';

  constructor( private appUtility: AppUtilityService){}

  myForm = new FormGroup({
    age: new FormControl('', [Validators.required,this.appUtility.integerValidator]),
  })


  onSubmit() {
    console.log(this.myForm.value);
  }
  
}
