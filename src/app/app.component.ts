import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'New title';
  number = 223
  arr = [21, 32 ,33, 44]
  obj = { a: 14, b: { c:23 } }
}
