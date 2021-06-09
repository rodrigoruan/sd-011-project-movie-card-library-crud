import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import NewMovie from './NewMovie'
import EditMovie from './EditMovie'
import NotFound from './NotFound'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route path='/movies/new' component={NewMovie} />
          <Route path='/movies/:id' render= {(props) => <MovieDetails {...props}/>} />
          <Route path='/movies/:id/edit' component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
