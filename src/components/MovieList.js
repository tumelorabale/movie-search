import React from 'react';
import '../styles/MovieList.css'

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					<p className='title'><b></b>{movie.Title}<b/></p>
					<p className='year'>{movie.Year}</p>
				</div>
			))}
		</>
	);
};
export default MovieList;