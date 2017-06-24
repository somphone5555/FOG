import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [``]
})
export class AboutComponent implements OnInit {
  title = 'About is ready';
  constructor() { }

  ngOnInit() {
  }

}
