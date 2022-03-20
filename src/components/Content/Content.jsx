import React from 'react';
import Themes from '../Themes';
import Result from '../Game/Result';
import Score from '../Game/Score';
import Canvas from '../Game/Canvas';
import Letters from '../Game/Letters';

function Content(props) {
	return (
		<div>
			<div>
				<Result />
				<Score />
			</div>
			<div>
				<Canvas />
				<Letters />
			</div>
			<div>
				<Themes />
			</div>
		</div>
	);
}

export default Content;
