import React from 'react';
import { Link } from 'react-router-dom'; // importa o Link
import PropTypes from 'prop-types'; // importa as PropTypes

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // chama as props passadas em MovieList
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie; // desestrutura para facilitar a vida

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div> // Passo 4 - adiciona o Link ((to) rota movies/:id - de forma dinâmica com o template (id) e o texto VER DETALHES)
    );
  }
}

export default MovieCard;

MovieCard.propTypes = { // valida as props
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // o oneOfType evita erro na validação em que retorna Number OR String
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
