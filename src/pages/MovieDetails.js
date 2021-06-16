import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import CardDetails from '../components/CardDetails';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    await movieAPI.getMovie();
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div>
        <Link to="/movies/:id/edit">EDITAR</Link>
        <div>{loading ? <Loading /> : <CardDetails />}</div>
      </div>
    );
  }
}

export default MovieDetails;
