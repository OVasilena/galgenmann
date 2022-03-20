import React from 'react';

function Letter(props) {
	const { letter } = props;

	console.log('Hello', letter);
	return <div className='letter'>{letter}</div>;
}

export default Letter;
