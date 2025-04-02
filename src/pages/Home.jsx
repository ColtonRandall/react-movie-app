// Display multiple movies
// Search for movies
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
  }, []); // dependency array - if this changes, run the 'effect'

  const searchMovies = (e) => {
    e.preventDefault; // prevents page reload on search
    alert(searchQuery);
    setSearchQuery(""); // return search bar to empty after search
  };

  return (
    <div className="home">
      <form onSubmit={searchMovies} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery} // connect component to search query state
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            // render a movie card if the search matches the movie title
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard
                title={movie.title}
                releaseDate={movie.releaseDate}
                key={movie.id} // must have a unique id
              />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
