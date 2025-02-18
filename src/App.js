import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies`
      )
    ).json();
    setMovies(json);
    setLoading(false);
    ;
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? 
      <h1>Loading...</h1> 
      : <div>
          {movies.map((movie) => 
            <div key={movie.id}>
              <img src={movie.poster_path} height="300px"/>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <ul>
                <li>
                  {movie.genre_ids.map((g) => 
                    <li>Genre_id: {g}</li>)}
                </li>
              </ul>
            </div>)
          }
        </div>
      }
    </div>
  );
}

export default App;
