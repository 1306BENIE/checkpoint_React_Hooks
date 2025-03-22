// src/components/Filter.js
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ searchTerm, setSearchTerm, minRating, setMinRating }) => {
  return (
    <Row className="mb-4">
      <Col md={6}>
        <Form.Control
          type="text"
          placeholder="Rechercher un film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Col>
      <Col md={6}>
        <Form.Control
          type="number"
          placeholder="Note minimale"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          min="0"
          max="10"
        />
      </Col>
    </Row>
  );
};

Filter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  minRating: PropTypes.number.isRequired,
  setMinRating: PropTypes.func.isRequired
};

export default Filter;