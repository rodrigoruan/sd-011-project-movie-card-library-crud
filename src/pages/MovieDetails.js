import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.loadingTrue = this.loadingTrue.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = await match.params;
    const response = await movieAPI.getMovie(id);
    this.loadingTrue(response);
  }

  loadingTrue(param) {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      movie: param,
      loading: false,
      id,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, id, loading } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle,
    } = movie;

    return (
      <div>
        { loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <p>{`Title: ${title}`}</p>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={ `/movies/${id}/edit` } params={ movie.id }>
              EDITAR
            </Link>
            <Link to="/">
              VOLTAR
            </Link>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
