import React from 'react';
import './header.css';

function Header(props) {
	return (
		<header>
			<h1>Galgenmann</h1>
			<nav>
				<ul>
					<li>Regeln</li>
					<li>Neues Spiel</li>
					<li>Über ...</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
