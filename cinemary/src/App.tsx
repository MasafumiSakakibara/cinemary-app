import React from 'react';
import './App.scss';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <MovieList />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<MovieList />} />
          {/* <Route path='/mymovie' children={<MyMovie />} /> */}
          {/* <Route path='/detail/:id' children={<Details/>}/> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
