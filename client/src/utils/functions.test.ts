import { USER, COMPUTER, EQUALITY } from './constantes';
import { PAPIER, CISEAUX } from '../../../commons/constantes';
import { isUserWin, defineWinner } from './functions';

describe('isUserWin', () => {
  test('should return true if the user win the game', () => {
    expect(isUserWin(CISEAUX, PAPIER)).toBeTruthy();
  });
  test('should return false if the user loose the game', () => {
    expect(isUserWin(PAPIER, CISEAUX)).toBeFalsy();
  });
});

describe('defineWinner', () => {
  test('should return USER if the user win the game', () => {
    expect(defineWinner(CISEAUX, PAPIER)).toBe(USER);
  });
  test('should return COMPUTER if the user loose the game', () => {
    expect(defineWinner(PAPIER, CISEAUX)).toBe(COMPUTER);
  });
  test('should return EUQALITY if the user and the computer play the same element', () => {
    expect(defineWinner(PAPIER, PAPIER)).toBe(EQUALITY);
  });
});
