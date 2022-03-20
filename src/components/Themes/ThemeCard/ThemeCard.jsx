import React from 'react';
import PropTypes from 'prop-types';

function ThemeCard(props) {
	return (
		<div>
			<div>
				<img src={props.path} alt={props.title} />
				<h3>{props.title}</h3>
			</div>
		</div>
	);
}

export default ThemeCard;

ThemeCard.propTypes = {
	path: PropTypes.string,
	title: PropTypes.string,
};

ThemeCard.defaultProps = {
	path: './images/default.png',
	title: 'Card title',
};
