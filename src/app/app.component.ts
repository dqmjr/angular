import { Component } from '@angular/core';
import {timeout} from "rxjs";

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

  img = 'https://stat.gov.kz/local/templates/statgov_main/img/bns_logo.svg'

  constructor() {
    setTimeout(() => {
    console.log('Time is over')
    this.img = 'https://static.tildacdn.com/tild3864-3939-4230-b465-323933643939/DataQazStat_21.png'
    }, 5000)
  }
}
