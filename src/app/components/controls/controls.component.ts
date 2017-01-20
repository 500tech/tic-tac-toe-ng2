import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-controls',
  template: `
    <h1 *ngIf="!game.ended"><ttt-cell [value]="game.currentPlayer"></ttt-cell>'s turn</h1>
    <h1 *ngIf="game.winner"><ttt-cell [value]="game.winner"></ttt-cell> has won the game</h1>
    <h1 *ngIf="game.tie"><ttt-cell [value]="'X'"></ttt-cell> and <ttt-cell [value]="'O'"></ttt-cell> are at tie</h1>
    <button (click)="game.resetGame()">Reset Game</button>
  `,
  styles: []
})
export class ControlsComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

}
