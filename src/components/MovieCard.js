import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    const {
      movie: {
        title,
        subtitle,
        storyline,
        imagePath,
        id,
      },
    } = this.props;

    this.state = {
      title,
      subtitle,
      storyline,
      imagePath,
      id,
    };
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      id,
    } = this.state;
    return (
      <div className="card" data-testid="movie-card">
        <img src={ imagePath } alt="capa do filme" className="image" />

        <div className="title">
          <h2>{ title }</h2>
        </div>

        <div className="subtitle">
          <h3>{ subtitle }</h3>
        </div>

        <div className="storyline">
          <p>{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
