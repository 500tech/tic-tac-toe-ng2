import { Injectable } from '@angular/core';


@Injectable()
export class GameService {
  currentPlayer:string;
  winner:string;
  board:string[][];
  moves:number;
  score:{} = {X:0,O:0,Tie:0};

  get tie() {return this.winner === 'Tie'}

  constructor() { this.resetGame()}

  resetGame() {
    this.currentPlayer = 'X';
    this.winner = null;
    this.moves = 0;
    this.board = [new Array(3),new Array(3),new Array(3)];
    this.log = [];
  }

  play(i,j) {
    if (this.winner) return;

    this.board[i][j] = this.currentPlayer;
    this.moves++;
    this._nextPlayer();
    this.winner = this._getWinner();
    if (this.moves === 9 && !this.winner) this.winner = 'Tie';
    if (this.winner) this.score[this.winner]++;
  }

  private _nextPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  private _getWinner() {
    if (this._rowHasWinner(0)) return this.board[0][0];
    if (this._rowHasWinner(1)) return this.board[1][0];
    if (this._rowHasWinner(2)) return this.board[2][0];

    if (this._columnHasWinner(0)) return this.board[0][0];
    if (this._columnHasWinner(1)) return this.board[0][1];
    if (this._columnHasWinner(2)) return this.board[0][2];

    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) return this.board[0][0];
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) return this.board[0][2];

    return null;
  }

  private _rowHasWinner(index) {
    return (this.board[index][0] === this.board[index][1] && this.board[index][1] === this.board[index][2]);
  }

  private _columnHasWinner(index) {
    return (this.board[0][index] === this.board[1][index] && this.board[1][index] === this.board[2][index]);
  }
}
