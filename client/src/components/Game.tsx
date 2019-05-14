import React, { Component } from 'react';
import { PLAY, STOP } from '../utils/constantes';
import { defineWinner } from '../utils/functions';

import {
  fetchComputerElement,
  cleanElementsHistory,
} from '../services/APIcalls';

import BeginScreen from './BeginScreen';
import GameBoard from './GameBoard';

interface IState {
  gameState: string;
  gameWinners: string[];
  timer: number;
}

export default class Game extends Component {
  state = {
    gameState: STOP,
    gameWinners: [],
    timer: 0,
  };

  timerInterval: NodeJS.Timeout | null = null;

  clearTimer = (timer: NodeJS.Timeout | null) => timer && clearInterval(timer);

  play = async (userElement: string) => {
    const computerElement = await fetchComputerElement(userElement);
    const winner = defineWinner(userElement, computerElement);
    this.setState((prevState: IState) => ({
      gameWinners: [...prevState.gameWinners, winner],
    }));
  };

  beginGame = () => {
    cleanElementsHistory();
    this.timeCounter();
    this.setState({
      gameState: PLAY,
      gameWinners: [],
    });
  };

  timeCounter = () => {
    const endTime = Date.now() + 5 * 1000;
    this.clearTimer(this.timerInterval);
    this.timerInterval = setInterval(() => {
      const timeLeft = endTime - Date.now();
      this.setState({ timer: timeLeft });
      timeLeft < 0 && this.endGame();
    }, 100);
  };

  endGame = () => {
    this.clearTimer(this.timerInterval);
    this.setState({
      gameState: STOP,
    });
  };

  render() {
    const { gameState, gameWinners, timer } = this.state;
    const beginScreen = gameState === STOP && (
      <BeginScreen beginGame={this.beginGame} gameWinners={gameWinners} />
    );
    const gameScreen = (
      <GameBoard gameWinners={gameWinners} play={this.play} timer={timer} />
    );

    return <div>{beginScreen || gameScreen}</div>;
  }
}
