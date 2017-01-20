import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-controls',
  template: `
    <h1 *ngIf="!game.winner">
      <ttt-cell [value]="game.currentPlayer"></ttt-cell> is playing
    </h1>
    <h1 *ngIf="game.tie">It's a tie!</h1>
    <h1 *ngIf="game.winner && !game.tie">
      <ttt-cell [value]="game.winner"></ttt-cell>has won!
    </h1>
    <button (click)="game.resetGame()">Reset Game</button>
  `,
  styles: []
})
export class ControlsComponent implements OnInit {

  constructor(private game:GameService) {}

  ngOnInit() {
  }

}
