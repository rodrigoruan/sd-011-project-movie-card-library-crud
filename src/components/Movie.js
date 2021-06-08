import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const details = `${id}/edit`;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/"> VOLTAR </Link>
          <Link to={ details }> EDITAR </Link>
        </div>
      </div>
    );
  }
}
