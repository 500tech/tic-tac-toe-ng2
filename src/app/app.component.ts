import { Component } from '@angular/core';

@Component({
  selector: 'ttt-root',
  template: `
    <ttt-controls></ttt-controls>
    <ttt-board></ttt-board>
    <ttt-score></ttt-score>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ttt works!';
}
