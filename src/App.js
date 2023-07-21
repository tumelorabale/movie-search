import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import Headings from './components/NavBar';
import Header from './components/Header';
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
			<Header/>
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<Headings heading='Movies and Series'/>
		</div>
		<div className='row'>
			<MovieList movies={movies} />
		</div>
	</div>		
	);
};
export default App;