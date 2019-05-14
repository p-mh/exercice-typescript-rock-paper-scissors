import { USER, COMPUTER, EQUALITY } from './constantes';
import { PIERRE, PAPIER, CISEAUX } from '../../../commons/constantes';

export const isUserWin = (userElem: string, computerElem: string) =>
  (userElem === PIERRE && computerElem === CISEAUX) ||
  (userElem === PAPIER && computerElem === PIERRE) ||
  (userElem === CISEAUX && computerElem === PAPIER);

export const defineWinner = (userElem: string, computerElem: string) => {
  const isEquality = userElem === computerElem;
  const winner = isUserWin(userElem, computerElem) ? USER : COMPUTER;
  return isEquality ? EQUALITY : winner;
};
