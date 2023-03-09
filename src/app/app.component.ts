import { Component } from '@angular/core';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-with-fun';
  arr=['aman','delhi','India']
  reg='123@google';
  myName='Aman Yadav'

  constructor(private mockService:MockService){}

  doNothingFun(){
    console.log('doing nothing')
  }

  returnSomething(){
    throw new Error("my custom error");
  }

  getBoolValue(){
    return this.mockService.getBoolValue();
  }

  changeName(){
    this.myName='Virat Kohli'
  }
}
