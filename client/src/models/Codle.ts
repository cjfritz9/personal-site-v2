import { StyleMap } from '../@types/codle';

export class PlayerData {
  public updatedAt: string;
  public didWin: boolean;
  public guesses: string[];
  public guessMap: StyleMap[];

  constructor(
    updatedAt?: string,
    didWin?: boolean,
    guesses?: string[],
    guessMap?: StyleMap[]
  ) {
    this.updatedAt = updatedAt ?? new Date().toUTCString();
    this.didWin = didWin ?? false;
    this.guesses = guesses?.length ? guesses : [];
    this.guessMap = guessMap?.length ? guessMap : [];
  }
}

export class GameBoard {
  public isWon: boolean;
  public isLost: boolean;
  public guesses: string[];
  public boardStyle: StyleMap[];
  public currentRow: number;

  constructor(
    isWon = false,
    guesses: string[] = [],
    boardStyle: StyleMap[] = []
  ) {
    this.isWon = isWon;
    this.isLost = guesses.length >= 6;
    this.guesses = guesses;
    this.boardStyle = boardStyle;
    this.currentRow = this.isWon ? guesses.length - 1 : guesses.length;
  }

  public addGuess(guess: string) {
    this.guesses.push(guess);
    this.nextRow();

    return this;
  }

  private nextRow() {
    if (this.isWon) return;
    if (this.currentRow < 5) {
      this.currentRow++;
    } else {
      this.setGameLost();
    }
    return;
  }

  public addRowStyle(styleMap: StyleMap) {
    this.boardStyle.push(styleMap);
    return this;
  }

  public setGameWon() {
    this.isWon = true;
    return this;
  }

  public setGameLost() {
    this.isLost = true;
    return this;
  }

  public resetGame() {
    this.isWon = false;
    this.isLost = false;
    this.guesses = [];
    this.boardStyle = [];
    this.currentRow = 1;
    return this;
  }

  public getGame() {
    return this;
  }
}
