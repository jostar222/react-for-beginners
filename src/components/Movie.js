import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ coverImg, title, overview, genre_ids }) {
  return <div>
  <img src={coverImg} alt={title} height="300px"/>
  <h2>
    <Link to="/movie">{title}</Link>
  </h2>
  <p>{overview}</p>
  <ul>
    <li>
      {genre_ids.map((g) => 
        <li>Genre_id: {g}</li>)}
    </li>
  </ul>
</div>;
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;