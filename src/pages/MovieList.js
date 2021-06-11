import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.searchInfo = this.searchInfo.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    this.setState(
      { isLoading: true },
      async () => {
        await movieAPI.getMovies()
          .then((response) => {
            this.setState({
              movies: [...response],
              isLoading: false,
            });
          });
      },
    );
  }

  searchInfo({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'bookmarkedOnly') {
      value = (target.checked === true);
    }

    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    return movies;
  }

  render() {
    const { isLoading, searchText, bookmarkedOnly, selectedGenre } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchInfo }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchInfo }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchInfo }
        />
        <div className="movie-list" data-testid="movie-list">
          {this.filterMovies()
            .map((movie) => (
              <MovieCard key={ movie.title } movie={ movie } />
            ))}
        </div>
      </>
    );
  }
}

export default MovieList;
