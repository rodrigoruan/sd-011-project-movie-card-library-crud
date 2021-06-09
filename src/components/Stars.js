import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function HalfRating({ value }) {
  return (
    <div className="fw-bold mx-auto">
      <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly />
      {value}
    </div>
  );
}
