import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/TVDetails";
import PageTemplate from "../components/templateTVPage";
import { getTV } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["TV", { id: id }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  

  return (
    <>
      {movie ? (
        <>
          <PageTemplate TV={movie}>
            <TVDetails TV={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TVPage;