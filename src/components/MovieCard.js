import React from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(){
    super()

  }
  render() {
    const { id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      gender,
      bookmarked } = this.props.movie;
    return (
      <div key={id} data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <p>{title}</p>
        <p>{storyline}</p>
        <button type="submit">
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </button>
      </div>
    );
  }
}

export default MovieCard;
