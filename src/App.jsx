import "./App.css";
import React from "react";
import MovieCard from "./components/MovieCard";

export default function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber == 1 ? (
        <MovieCard key={1} title="Movie1" releaseDate="2023" />
      ) : (
        <MovieCard key={2} title="Movie 2" releaseDate="2023" />
      )}
    </>
  );
}
