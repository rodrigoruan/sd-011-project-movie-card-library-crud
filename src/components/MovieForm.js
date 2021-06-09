import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <Form.Group>
        <Form.Label htmlFor="movie_title">Título</Form.Label>
        <input
          type="text"
          placeholder="Insira o título"
          id="movie_title"
          className="validate form-control"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <Form.Group>
        <Form.Label htmlFor="movie_subtitle">Subtítulo </Form.Label>
        <input
          className="form-control"
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <Form.Group>
        <Form.Label htmlFor="movie_image"> Imagem</Form.Label>
        <input
          className="form-control"
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <Form.Group>
        <Form.Label htmlFor="movie_storyline">Sinopse</Form.Label>
        <textarea
          className="form-control"
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <Form.Group>
        <Form.Label htmlFor="movie_genre">Gênero</Form.Label>
        <select
          className="form-control"
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>{' '}
      </Form.Group>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <Form.Group>
        <Form.Label htmlFor="movie_rating">Avaliação </Form.Label>
        <input
          className="form-control"
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderSubmitButton() {
    return (
      <Form.Group>
        <Button className="btn btn-primary mt-3" type="button" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form.Group>
    );
  }

  render() {
    return (
      <div className="d-flex lead justify-content-center">
        <Form className="movie-form card p-3 bg-light">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </Form>
      </div>
    );
  }
}

MovieForm.defaultProps = {
  movie: {},
};

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onSubmit: PropTypes.func.isRequired,
};
