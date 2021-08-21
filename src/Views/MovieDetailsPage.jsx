import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import useGoBack from '../hooks/useGoBack';
import { fetchMovieInformation } from '../services/apiService';
import { Button } from '../App.styled';
import MovieInfo from '../Components/MovieDetails/MovieDetails';
import Spinner from '../Components/Spinner/Spinner';

const CastView = lazy(() =>
  import('./CastViews' /* webpackChunkName: "cast-view" */),
);
const ReviewsView = lazy(() =>
  import('./ReviewsView' /* webpackChunkName: "reviews-view" */),
);

export default function MovieDetailsPage() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const goBack = useGoBack();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieInformation() {
      try {
        const movie = await fetchMovieInformation(movieId);

        if (!movie) {
          throw new Error('Page not found');
        }

        setMovie(movie);
      } catch (error) {
        history.push('/');
        toast.error('Page not found', { duration: 3000 });
      }
    }
    getMovieInformation();
  }, [history, movieId]);

  return (
    <>
      <Button type="button" onClick={goBack}>
        Go back
      </Button>

      {movie && (
        <MovieInfo
          title={movie.title}
          poster={movie.poster_path}
          overview={movie.overview}
          releaseDate={movie.release_date || 'ツ'}
          popularity={movie.popularity}
          vote={movie.vote_average}
          genres={movie.genres.map(genre => genre.name).join(', ') || '\u2015'}
        />
      )}

      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <CastView />
        </Route>
        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>
      </Suspense>
    </>
  );
}
