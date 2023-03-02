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
    age: new FormControl('', [Validators.required, this.integerValue]),
  })


  onSubmit() {
    console.log(this.myForm.value);
  }
  integerValue(control: AbstractControl): ValidationErrors | null {

    const v = +control.value;
    return v%1===0?null:{ 'integerValue': true}

  }
}
