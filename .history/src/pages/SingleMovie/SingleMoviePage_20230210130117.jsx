import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
  const { movieId } = useParams();
  return <div>Now showing movie with id - {movieId}</div>;
};

export default SingleMoviePage;
