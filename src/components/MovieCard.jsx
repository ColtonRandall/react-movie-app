function MovieCard({ url, title, releaseDate }) {
  function onFavouriteClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
