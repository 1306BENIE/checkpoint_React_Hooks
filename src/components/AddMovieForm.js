import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosterURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !note) {
      setError('Tous les champs sont requis.');
      return;
    }
    addMovie({ title, description, posterURL, note: Number(note) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setNote('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
      {error && <p className="text-danger">{error}</p>}
      <Form.Group>
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Affiche du Film</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Note</Form.Label>
        <Form.Control type="number" min="0" max="10" value={note} onChange={(e) => setNote(e.target.value)} />
      </Form.Group>
      <Button type="submit" className="mt-2">Ajouter</Button>
    </Form>
  );
};

AddMovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default AddMovieForm;