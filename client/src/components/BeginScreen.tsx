import React from 'react';
import { USER, COMPUTER } from '../utils/constantes';

interface IProps {
  beginGame: () => void;
  gameWinners: string[];
}

const BeginScreen: React.FC<IProps> = ({ beginGame, gameWinners }) => {
  const userPoints = gameWinners.filter((winner: string) => winner === USER)
    .length;
  const computerPoints = gameWinners.filter(
    (winner: string) => winner === COMPUTER
  ).length;

  const winMessage =
    !!gameWinners.length &&
    (userPoints > computerPoints ? 'You win' : 'You loose');

  return (
    <div>
      <p>{winMessage}</p>
      <button onClick={beginGame}>Play !</button>
    </div>
  );
};

export default BeginScreen;
