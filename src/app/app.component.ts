import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-with-fun';

  myForm = new FormGroup({
    age: new FormControl('',[Validators.required,this.gte]),
  })
 
 
  onSubmit() {
    console.log(this.myForm.value);
  }
  gte(control: AbstractControl): ValidationErrors | null {
 
    const v=+control.value;

    if(v<10){
      return {'gte':true, 'requiredValue': 10}
    }
 
    // if (isNaN(v)) {
    //   return { 'gte': true, 'requiredValue': 10 }
    // }      
 
    // if (v <= 10) {
    //   return { 'gte': true, 'requiredValue': 10 }
    // } 
 
    return null
 
}
}
