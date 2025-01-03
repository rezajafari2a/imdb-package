const { getMovieByImdbId, getMovieByTitle } = require("imdb-webscraper");

const getMovies = async () => {
  //get movie by imdbId
  console.log(await getMovieByImdbId("tt5950044"));
  //get movie data with title
  console.log(await getMovieByTitle("Superman (2025)"));
};

getMovies();
