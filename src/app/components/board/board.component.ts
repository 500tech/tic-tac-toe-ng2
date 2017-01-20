import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-board',
  template: `
    <table class="board">
      <tr class="row" *ngFor="let row of game.board; let i = index">
        <td *ngFor="let cell of row ; let j = index">
          <ttt-cell
            [value]="cell"
            (select)="onSelect(i,j)"
            [nextValue]="game.currentPlayer">
          </ttt-cell>
        <td>
      </tr>
    </table>
  `,
  styles: []
})
export class BoardComponent implements OnInit {

  constructor(private game:GameService) {
  }

  onSelect(i, j) {
    if (this.game.board[i][j]) {
      return alert('Cell already has value');
    }

    this.game.play(i, j);
  }
}
