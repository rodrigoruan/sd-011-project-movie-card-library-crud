import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    this.state = {
      id: match.params.id,
      loading: true,
      title: '',
      subtitle: '',
      storyline: '',
      rating: -1,
      imagePath: '',
      genre: '',
    };
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then(({ title, subtitle, storyline, rating, imagePath, genre }) => {
        this.setState(() => ({
          loading: false,
          title,
          subtitle,
          storyline,
          rating,
          imagePath,
          genre,
        }));
      });
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state;

    return (
      <div className="container">
        <div className="card" data-testid="movie-details">
          <div className="card-header">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>
          <div className="card-footer">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
