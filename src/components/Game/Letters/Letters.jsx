import React from 'react';
import Letter from './Letter';
import { alphabet } from '../../../constants/alphabet';
import './letters.css';

function Letters() {
	const german = alphabet[0].letters;
	//console.log('German', german);
	return (
		<div className='letters'>
			{german.map((letter) => (
				<Letter letter={letter} key={letter.id} />
			))}
		</div>
	);
}

export default Letters;
