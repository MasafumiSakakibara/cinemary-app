import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import getTMDB_NowShowing from '../apis/getNowShowing';
import { TMDB_NowShowing } from '../Interface';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const MovieList = () => {
  const initState: TMDB_NowShowing = [
    {
      popularity: 0,
      vote_count: 0,
      video: false,
      poster_path: '',
      id: 0,
      adult: false,
      backdrop_path: '',
      original_language: '',
      original_title: '',
      genre_ids: [],
      title: '',
      vote_average: 0,
      overview: '',
      release_date: ''
    }
  ];

  const [movies, setMovies] = useState<TMDB_NowShowing>(initState);

  useEffect(() => {
    getTMDB_NowShowing(0).then(res => {
      console.log(res);
      const data: TMDB_NowShowing = res.data.results;
      setMovies(data);
    });
  }, []);

  return (
    <main className="main">
      <div className="section1">
        <h2>Now Showing!!</h2>
        <div className="movie_posters">
          <GridList cellHeight={500} cols={3}>
            {movies.slice(0, 12).map(movie => (
              <GridListTile key={movie.id} cols={1}>
                <Link to={`/detail/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <GridListTileBar
                  title={movie.title}
                  subtitle={movie.vote_average}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </main>
  );
};

export default MovieList;
