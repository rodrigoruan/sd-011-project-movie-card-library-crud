import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ({ path, name, func, variant, genre }) {
  let history = useHistory();

  function handleClick() {
    if (func) {
      func();
    }
    if (path) {
      history.push(path);
    } else {
      history.push('/');
    }
  }
  if (genre) {
    const variantType = { action: 'danger', comedy: 'info', fantasy: 'success' };
    variant = `outline-${variantType[genre]}`;
  }

  return (
    <Button type="button" onClick={handleClick} variant={variant} size="lg">
      {`${name}`}
    </Button>
  );
}
