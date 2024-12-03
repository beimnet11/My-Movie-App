export const fetchMovies = async (searchTerm) => {
  const API_KEY = '9800aab6';

  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`,
  );
  const data = await response.json();
  return data.Search
    ? data.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
      }))
    : [];
};
