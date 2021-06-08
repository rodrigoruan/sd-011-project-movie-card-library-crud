import React from 'react';
import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  render() {
    const { bookmarked, genre, id, imagePath, rating, storyline, subtitle, title } = this.props.movie;
    const { style } = this.props;
    return (
      <div data-testid="movie-card" className="card movie-card">
        <img src={imagePath} className="card-img-top" alt="" />
        <div className="card-header text-center"> Rating: {rating}</div>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">{storyline}</p>
        </div>
        <div className="card-footer">
          <Link className="card-link" to={`/movies/${id}`}>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}
