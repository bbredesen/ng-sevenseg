import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myValue : number = 4;

  incrementValue() {
    console.log('app-root: incrementValue');
    this.myValue = this.myValue + 1;
  }
}
