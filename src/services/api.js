const API_KEY = "174880ef53bc4497e1ee9a7cad6c8f11";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json;
  return data.results;
}
