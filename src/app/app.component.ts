import { Component } from '@angular/core';

@Component({
  selector: 'ttt-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ttt works!';
}
