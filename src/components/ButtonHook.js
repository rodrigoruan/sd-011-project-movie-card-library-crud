import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ({ path, name, func, variant }) {
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

  return (
    <Button type="button" onClick={handleClick} variant={variant} size="lg">
      {`${name}`}
    </Button>
  );
}
