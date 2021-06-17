import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: null, 
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fecthApi = this.fecthApi.bind(this);
  }
  
  handleSubmit(updatedMovie) {
    this.setState(
      { loading: 'loading' },
    async () => {
      this.setState({
        status: 'succeful',
        shouldRedirect: true,
        movie: await movieAPI.updateMovie(updatedMovie)
      });
    });
  }
  
  async fecthApi() {
    const { id } = this.props.match.params
    this.setState(
      { loading: 'loading' },
      async () => {
        this.setState({
          shouldRedirect: false,
          status: 'loading',
          movie: await movieAPI.getMovie(id)
        });
      });
    }
    
    componentDidMount() {
      this.fecthApi();
    }
    
    
    render() {
      const { status, shouldRedirect, movie } = this.state;
      
      if (shouldRedirect === false) {
        return <MovieForm movie={ movie } onSubmit={ this.handleSubmit }/>
      }
      if (shouldRedirect) {
       return <Redirect to="/" />
      }

    return (
      <div data-testid="edit-movie">
        {status === 'loading'? <Loading /> : <MovieForm movie={ movie } onSubmit={ this.handleSubmit }/>}
      </div>
    );
  }
}

export default EditMovie;
