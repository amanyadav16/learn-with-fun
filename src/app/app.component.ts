import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-with-fun';

  myForm = new FormGroup({
    age: new FormControl('',[Validators.required]),
  })
 
 
  onSubmit() {
    console.log(this.myForm.value);
  }
}
