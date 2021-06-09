import React from 'react';

class MovieCard extends React.Component {
  constructor(){
    super()

  }
  render() {
    const { id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      gender,
      bookmarked } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
