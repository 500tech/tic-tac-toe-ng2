import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-controls',
  template: `
    <h1>{{game.currentPlayer}}'s turn</h1>
    <button (click)="game.resetGame()">Reset Game</button>
  `,
  styles: []
})
export class ControlsComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

}
