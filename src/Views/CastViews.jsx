import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchCastInformation } from '../services/apiService';
import Cast from '../Components/Cast/Cast';

export default function CastView() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function getCastInformation() {
      try {
        const cast = await fetchCastInformation(movieId);

        if (!cast.length) {
          throw new Error('Cast not found');
        }

        setCredits(cast);
      } catch (error) {
        console.log(error);
        toast.error('Cast not found');
      }
      const cast = await fetchCastInformation(movieId);

      setCredits(cast);
      window.scrollTo({ top: 650, behavior: 'smooth' });
    }
    getCastInformation();
  }, [movieId]);

  return <>{credits && <Cast credits={credits} />}</>;
}
