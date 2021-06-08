import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
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

  renderMovie = () => {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const newMovie = await movieAPI.getMovie(id);
      this.setState({ movie: newMovie, loading: false });
    });
  };

  handleDelete = () => {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  };

  componentDidMount() {
    this.renderMovie();
  }

  renderDetails = () => {
    const { id } = this.props.match.params;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="movie-details">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={`../${imagePath}`} className="card-img-top img-fluid" alt="Movie Cover" />
        </div>
        <div className="col-lg-6 card ">
          <div className="text-center mt-3">
            <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
            <h4 className="fw-bold lh-1 mb-3">{subtitle}</h4>
            <p className="lead">{storyline}</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Genre: {genre}</p>
              </div>
              <div className="col">
                <p>{`Rating: ${rating}`}</p>
              </div>
            </div>
          </div>
          <div className="justify-content-md-start">
            <button href="/" className="btn">
              <Link className="btn btn-success btn-lg px-4 me-md-2" to="/">
                VOLTAR
              </Link>
            </button>
            <button href="/" className="btn">
              <Link className="btn btn-warning btn-lg px-4 me-md-2" to={`/movies/${id}/edit`}>
                EDITAR
              </Link>
            </button>
            <button href="/" className="btn">
              <Link className="btn btn-danger btn-lg px-4 me-md-2" to="/" onClick={this.handleDelete}>
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

export default MovieDetails;
