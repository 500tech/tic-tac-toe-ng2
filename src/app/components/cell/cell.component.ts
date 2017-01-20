import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-cell',
  template: `
    <span class="cell-content" (click)="select.emit()">
      {{ value }}
    </span>
  `,
  styles: []
})
export class CellComponent implements OnInit {
  @Input() value:string;
  @Output() select:EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
