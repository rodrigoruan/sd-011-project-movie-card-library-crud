import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: '',
    };
    this.renderMovie = this.renderMovie.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.renderMovie();
  }

  renderMovie = () => {
    // prettier-ignore
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, async () => {
      const newMovie = await movieAPI.getMovie(id);
      this.setState({ movie: newMovie, loading: false });
    });
  };

  handleDelete = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.deleteMovie(id);
  };

  renderDetails = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movie-details">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={ `../${imagePath}` }
            className="card-img-top img-fluid"
            alt="Movie Cover"
          />
        </div>
        <div className="col-lg-6 card ">
          <div className="text-center mt-3">
            <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
            <h4 className="fw-bold lh-1 mb-3">{subtitle}</h4>
            <p className="lead">{storyline}</p>
          </div>
          <div className="container">
            <p>
              {' '}
              Genre:
              {genre}
            </p>
            <p>{`Rating: ${rating}`}</p>
          </div>
          <div className="justify-content-md-start">
            <button type="button" href="/" className="btn">
              <Link className="btn btn-success btn-lg px-4 me-md-2" to="/">
                VOLTAR
              </Link>
            </button>
            <button type="button" href="/" className="btn">
              <Link
                className="btn btn-warning btn-lg px-4 me-md-2"
                to={ `/movies/${id}/edit` }
              >
                EDITAR
              </Link>
            </button>
            <button type="button" href="/" className="btn">
              <Link
                className="btn btn-danger btn-lg px-4 me-md-2"
                to="/"
                onClick={ this.handleDelete }
              >
                DELETAR
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { shouldRedirect, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return loading ? <Loading /> : this.renderDetails();
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
