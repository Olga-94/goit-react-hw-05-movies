import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './Components/AppBar/AppBar';
import { Container } from './App.styled';
import Spinner from './Components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./Views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <Toaster />
    </Container>
  );
}

export default App;
