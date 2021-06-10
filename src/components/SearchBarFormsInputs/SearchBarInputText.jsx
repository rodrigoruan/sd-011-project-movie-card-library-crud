import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label
        htmlFor="search-bar-input-text"
        className="search-bar-input"
        data-testid="text-input-label"
      >
        Search by text:
        <input
          id="search-bar-input-text"
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

SearchBarInputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInputText;
