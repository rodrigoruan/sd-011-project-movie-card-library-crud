import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { text, path } = this.props;
    return (
      <div>
        <button type="button" className="generic-button">
          <Link to={ path }>
            { text }
          </Link>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;
