import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
	return (
		<div className='wrapper'>
			<section className='app'>
				<Header />
				<Content />
				<Footer />
			</section>
		</div>
	);
}

export default App;
