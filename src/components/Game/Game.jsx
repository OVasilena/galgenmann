import React from 'react';
import Canvas from './Canvas';
import Letters from './Letters';
import './game.css';

function Game(props) {
	return (
		<div className='game-container'>
			<Canvas />
			<div className='letter-wrapper'>
				<Letters />
			</div>
		</div>
	);
}

export default Game;
