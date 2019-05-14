import React from 'react';
import { ELEMENTS } from '../../../commons/constantes';
import { USER, COMPUTER } from '../utils/constantes';

interface IProps {
  gameWinners: string[];
  play: (element: string) => void;
  timer: number;
}

const GameBoard: React.FC<IProps> = ({ gameWinners, play, timer }) => {
  const userPoints = gameWinners.filter((winner: string) => winner === USER)
    .length;
  const computerPoints = gameWinners.filter(
    (winner: string) => winner === COMPUTER
  ).length;

  const timeLeft = Math.floor(timer / 1000);

  const gameButtons = ELEMENTS.map(element => (
    <button key={element} onClick={play.bind(null, element)}>
      {element}
    </button>
  ));

  return (
    <div>
      <div>
        User: {userPoints} | Computer: {computerPoints}
      </div>
      <div>Time left : {timeLeft}</div>
      <div>{gameButtons}</div>
    </div>
  );
};

export default GameBoard;
