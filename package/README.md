#	imdb-webscraper

<h1 align="center">Welcome to imdb-webscraper 👋</h1>

<p>
	This package fetches data from Imdb website. You can fetch movie from Imdb with these two methods:
</p>

<ul>
<li>
- getMovieByImdbId: This method gets Imdb id as input and return movie with that id. 
</li>
<li>
- getMovieByTitle: This method gets movie detail with movie title. This method uses two fetch request to extract data.
</li>
</ul>
## Result structure

```

{ status: "success" | "error" , data:Object | null , error: null | string }

```

## Exception handeling

If package encounters any error, it will return error details and data field will be null. You can use status  or error fields to find out if any error has been occurred.

## Invoke

```
const { getMovieByImdbId, getMovieByTitle } = require("imdb-webscraper");

const getMovies = async () => {
  //get movie by imdbId
  console.log(await getMovieByImdbId("tt5950044"));
  //get movie data with title
  console.log(await getMovieByTitle("Superman (2025)"));
};

getMovies();

```

## Support

I you have any issue just let us know. If this package needs any update, our team will do it.
