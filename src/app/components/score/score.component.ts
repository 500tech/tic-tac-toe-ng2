import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-score',
  template: `
    <div>X: {{game.score.X}}</div>
    <div>O: {{game.score.O}}</div>
    <div>Tie: {{game.score.Tie}}</div>
  `,
  styles: []
})
export class ScoreComponent implements OnInit {

  constructor(private game:GameService) {
  }

  ngOnInit() {
  }

}
