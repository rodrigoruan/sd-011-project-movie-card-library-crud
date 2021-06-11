import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <div>
          Carregando...
        </div>
      );
    }
    return null;
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
