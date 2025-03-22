import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Row className="justify-content-center">
      {movies.map((movie, index) => (
        <Col key={index} md={4}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string.isRequired,
      note: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieList;
