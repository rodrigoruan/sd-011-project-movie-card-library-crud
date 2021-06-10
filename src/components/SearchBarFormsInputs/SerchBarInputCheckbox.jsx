import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInputCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="search-bar-input-checkbox"
        className="search-bar-input-checkbox"
        data-testid="checkbox-input-label"
      >
        <input
          id="search-bar-input-checkbox"
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
        Favorites
      </label>
    );
  }
}

SearchBarInputCheckbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBarInputCheckbox;
