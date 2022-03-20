import React from 'react';
import ThemeCard from './ThemeCard';
import { mockedThemes } from '../../constants/themesConstant';
import './themes.css';

function Themes() {
	console.log('Mocked Data: ', mockedThemes);
	return (
		<div className='games-theme'>
			{mockedThemes.map((obj) => (
				<ThemeCard path={obj.path} title={obj.title} key={obj.ident} />
			))}
		</div>
	);
}

export default Themes;
