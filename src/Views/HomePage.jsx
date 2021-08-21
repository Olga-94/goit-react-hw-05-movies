import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchTrandingMovies } from '../services/apiService';
import MovieCardList from '../Components/MovieCardList/MovieCardList';
import Pagination from '../Components/Pagination/Pagination';

export default function HomePage() {
  const { isExact } = useRouteMatch();
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const currentPage =
    Number(new URLSearchParams(window.location.search).get('page')) || 1;

  useEffect(() => {
    if (!isExact) {
      history.push('/');
      toast.error('Page not found', { duration: 3000 });
    }

    async function getFetchMovies() {
      try {
        const data = await fetchTrandingMovies(currentPage);
        const { results, total_pages } = data;

        setTotalPages(total_pages);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, [currentPage, history, isExact]);

  const handlePageClick = ({ selected }) => {
    history.push({
      ...window.location,
      search: selected === 0 ? '' : `page=${selected + 1}`,
    });
  };

  return (
    <>
      <MovieCardList movies={movies} />
      <Pagination totalPages={totalPages} onClick={handlePageClick} />
    </>
  );
}
