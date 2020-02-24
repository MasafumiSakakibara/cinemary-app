import axios from 'axios';
import { API_KEY } from '../const';
import { TMDB_NowShowing } from '../Interface';

const getTMDB_NowShowing = (page: number = 0) => {
  const num = page + 1;
  const key = API_KEY;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ja&page=${num}`;
  console.log(axios.get(url));
  return axios.get(url);
};

export default getTMDB_NowShowing;
