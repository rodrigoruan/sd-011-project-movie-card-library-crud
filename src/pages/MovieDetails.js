import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Button from '../components/Button';

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
          <img src={`../${imagePath}`} className="card-img-top img-fluid" alt="Movie Cover" />
        </div>
        <div className="col-lg-6 card ">
          <div className="btnDetails">
            <Button name={`Rating: ${rating}`} size="lg" variant="outline-primary"></Button>
            <Button
              name={` ${genre.charAt(0).toUpperCase() + genre.slice(1)}`}
              size="lg"
              genre={genre}
            ></Button>
          </div>
          <div className="text-center mt-3">
            <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
            <h4 className="fw-bold lh-1 mb-3">{subtitle}</h4>
            <p className="lead">{storyline}</p>
          </div>

          <div className="d-flex justify-content-evenly m-3">
            <Button name="Back" variant="success" size="lg" />
            <Button
              name="Edit"
              path={`/movies/${id}/edit`}
              variant="warning"
              className="btnDetails"
              size="lg"
            />
            <Button
              className="btnDetails"
              name="Delete"
              func={this.handleDelete}
              variant="danger"
              size="lg"
            />
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
