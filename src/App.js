import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import Headings from './components/NavBar';
import Logo from '../src/assets/movies.jpg'
const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=dfc9f431`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	// "rewrites": [
	//	{
	//	  "source": "**",
	//	  "destination": "/index.html"
	//	}
	//  ]
	return (
		<div className='App'>
		<div>
			<div className='header'>
			<img className='logo' src={Logo} width='60px' height='60px' alt='logo'></img>
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<Headings heading='Movies and Series'/>
		</div>
		<div className='mymovies'>
			<MovieList movies={movies} />
		</div>
	</div>		
	);
};
export default App;