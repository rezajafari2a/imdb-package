//Search to find movie id
const searchMovieData = async (title) => {
  let result = [];
  await fetch(`https://www.imdb.com/find/?q=${title}&ref_=nv_sr_sm`)
    .then((response) => response.text())
    .then(async (html) => {
      try {
        const movieTextData = html
          .split('<script id="__NEXT_DATA__" type="application/json">')[1]
          .split("</script>")[0];
        const movieData = JSON.parse(movieTextData);
        if (movieData.props.pageProps.titleResults.results?.[0]) {
          result = {
            data: await fetchMovieData(
              movieData.props.pageProps.titleResults.results?.[0].id
            ),
            error: null,
            status: "success",
          };
        } else {
          return { status: "error", error: "not found", data: null };
        }
      } catch (error) {
        console.log("🚀 ~ searchMovieData ~ error:", error);
        return { status: "error", error, data: null };
      }
    });
  return result;
};

//Fetching movie data
const fetchMovieData = async (movieId) => {
  let result = [];
  await fetch(`https://www.imdb.com/title/${movieId}`)
    .then((response) => response.text())
    .then((html) => {
      try {
        const movieTextData = html
          .split('<script id="__NEXT_DATA__" type="application/json">')[1]
          .split("</script>")[0];
        const movieData =
          JSON.parse(movieTextData).props.pageProps.mainColumnData;
        result = movieData;
      } catch (error) {
        return { status: "error", error, data: null };
      }
    });
  return result;
};
const getMovieByTitle = async (title) => {
  return await searchMovieData(title);
};
const getMovieByImdbId = async (id) => {
  return { data: await fetchMovieData(id), error: null, status: "success" };
};

module.exports = { getMovieByTitle, getMovieByImdbId };
