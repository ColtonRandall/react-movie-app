// Display multiple movies
// Search for movies
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    // render movies dynamically regardless of number
    { id: 1, title: "John Wick", releaseDate: "2014" },
    { id: 2, title: "Terminator", releaseDate: "2000" },
    { id: 3, title: "The Matrix", releaseDate: "1999" },
  ];

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
