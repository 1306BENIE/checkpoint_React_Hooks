import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-2 shadow-lg rounded">
      <Card.Img 
        variant="top" 
        src={movie.posterURL} 
        alt={movie.title} 
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text><strong>Note:</strong> {movie.note}/10</Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterURL: PropTypes.string,
    note: PropTypes.number.isRequired
  }).isRequired
};

export default MovieCard;