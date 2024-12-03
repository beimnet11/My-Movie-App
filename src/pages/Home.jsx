import React, { useState, useEffect } from "react";
import { fetchMovies } from "../services/movieAPI";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); 

    return () => {
      clearTimeout(handler); 
    };
  }, [search]);

  useEffect(() => {
    const getMovies = async () => {
      if (debouncedSearch) {
        const data = await fetchMovies(debouncedSearch);
        setMovies(data);
      }
    };
    getMovies();
  }, [debouncedSearch]);

  return (
    <div>
      <h1>Movie Finder</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
