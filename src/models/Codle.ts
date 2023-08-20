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
