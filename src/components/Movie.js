import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, overview, genre_ids }) {
  return <div>
  <img src={coverImg} alt={title} height="300px"/>
  <h2>
    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
  </h2>
  <p>{overview}</p>
  <ul>
      {genre_ids.map((g) => 
      <li key={g}>Genre_id: {g}</li>)}
  </ul>
</div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;