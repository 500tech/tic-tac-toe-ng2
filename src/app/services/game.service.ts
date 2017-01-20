import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  board:string[][];
  currentPlayer:string;

  constructor() {
    this.resetGame();
  }

  play(i,j) {
    this.board[i][j] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  resetGame() {
    this.board = [new Array(3), new Array(3), new Array(3)];
    this.currentPlayer = 'X';
  }
}
