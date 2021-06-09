import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieDetailsComp extends Component {
  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.props;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{title}</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}
