import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { text, path, onClick } = this.props;
    return (
      <div>
        <button type="button" className="generic-button" onClick={ onClick }>
          <Link to={ path }>
            { text }
          </Link>
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
