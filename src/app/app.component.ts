import { Component } from '@angular/core';

@Component({
  selector: 'ttt-root',
  template: `
    <h1>{{ title }}</h1>
  `,
  styles: [
    `h1 {color: blue}`
  ]
})
export class AppComponent {
  title:string = 'Tic Tac Toe!';

}
