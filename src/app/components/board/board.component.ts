import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-board',
  template: `
    <table>
      <tr *ngFor="let row of board; let i = index">
        <td *ngFor="let cell of row; let j = index">
          <ttt-cell [value]="cell" [nextValue]="currentPlayer" (select)="playCell(i,j)"></ttt-cell>
        </td>
      </tr>
    </table>
  `,
  styles: []
})
export class BoardComponent implements OnInit {
  board:string[][] = [new Array(3), new Array(3), new Array(3)];
  currentPlayer:string = 'X';
  constructor() { }

  ngOnInit() {
  }
  playCell(i, j) {
    if (this.board[i][j]) {
      alert('Please choose an empty cell!');
    }
    else {
      this.board[i][j] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
