import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)
      ).json();
      console.log(json);
  };
  useEffect(() => {
    const json = getMovie();
  }, [])
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
export default Detail;