import { useState } from 'react';
import './App.css'
 const MovieApp = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
   const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=8114984a`);
      const data = await response.json();
      if (data.Response === 'False') {
        setErrorMessage('No results found. Please check the spelling or try something else.');
        setMovieData(null);
      } else {
        setMovieData(data);
        setErrorMessage('');
      }
      setMovieTitle('');
    } catch (error) {
      console.log(error);
    }
  }
   return (
    <div className="container">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={movieTitle}
        onChange={e => setMovieTitle(e.target.value)}
      />
      <button>Search</button>
      </form>
      <p><b>Kindly, search movie name with correct spelling to get the data. Please!!</b></p>
      {errorMessage && <p>{errorMessage}</p>}
      {movieData && (
        <div className="movie-details">
          <h2>{movieData.Title}</h2>
          <p><b>Year:</b> {movieData.Year}</p>
          <p><b>Rated:</b> {movieData.Rated}</p>
          <p><b>Released:</b> {movieData.Released}</p>
          <p><b>Runtime:</b> {movieData.Runtime}</p>
          <p><b>Genre:</b> {movieData.Genre}</p>
          <p><b>Director:</b> {movieData.Director}</p>
          <p><b>Writer:</b> {movieData.Writer}</p>
          <p><b>Actors:</b> {movieData.Actors}</p>
          <p><b>Plot:</b> {movieData.Plot}</p>
          <img src={movieData.Poster} alt={movieData.Title} />
          <h3>Ratings:</h3>
          <ul>
            {movieData.Ratings.map(rating => (
              <li key={rating.Source}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
          <p>BoxOffice: {movieData.BoxOffice}</p>
        </div>
      )}
    </div>
  );
}
 export default MovieApp;