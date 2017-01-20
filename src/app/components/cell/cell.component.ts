import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-cell',
  template: `
    <span
      class="cell-content"
      (click)="onClick()">
      <span *ngIf="value">{{ value }}</span>
      <span class="hover-value" *ngIf="!value">{{ nextValue }}</span>
    </span>
  `,
  styles: [
    `.cell-content { text-align: center; cursor: pointer }`,
    `.cell-content:hover .hover-value { opacity: 0.3 }`,
    `.hover-value { opacity: 0 }`
  ]
})
export class CellComponent implements OnInit {
  @Input() value:string;
  @Input() nextValue:string;
  @Output() select:EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.select.emit();
  }
}
