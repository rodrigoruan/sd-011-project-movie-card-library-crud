import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // importação do link de 'react-router-dom'
/*
Componente MovieCard.js
-> No MovieCard atendemos ao Requisito 3 nele é pedido para que cada MovieCard quando renderizado traga as informações de titulo e sinopse do filme
-> Que tenha um link com o texto VER DETALHES que redirecione para o componente MovieDetails
-> Para atender à primeira parte desse requisito trouxe do trabalho anterios Movie Card Library Stateful o que foi feito no componente MovieCard pois era as mesmas referencias
*/
class MovieCard extends React.Component {
  render() {
    // Aqui desconstruo a props movie
    const { movie } = this.props;
    // Aqui desconstruo movie afim de ter acesso as informações do filme
    const { id, title, subtitle, storyline, /* rating, */ imagePath } = movie;
    return (
      // renderizo na tela casa uma das informações do filme
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        {/* <Rating rating={ rating } /> */}
        {/* por fim crio um Link com o caminho passando
        via url o id do filme em questão */}
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
// como no ultimo trabalho faço a validação das proptypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
