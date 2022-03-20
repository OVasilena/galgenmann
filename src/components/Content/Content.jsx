import React from 'react';
import Themes from '../Themes';
import Result from '../Result';
import Score from '../Score';
import Game from '../Game';
import './content.css';

function Content(props) {
	return (
		<div className='container'>
			<div className='game-header'>
				<Result />
				<Score />
			</div>
			<div className='game-content'>
				<Game />
			</div>
			<div className='game-theme'>
				<Themes />
			</div>
		</div>
	);
}

export default Content;
