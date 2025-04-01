// Display multiple movies
// Search for movies
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    // render movies dynamically regardless of number
    { id: 1, title: "John Wick", releaseDate: "2014" },
    { id: 2, title: "Terminator", releaseDate: "2000" },
    { id: 3, title: "The Matrix", releaseDate: "1999" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => {
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
          />;
        })}
      </div>
    </div>
  );
}

export default Home;
