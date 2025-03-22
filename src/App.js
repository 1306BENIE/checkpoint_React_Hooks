import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import Inception from './assets/inception.jpg';
import Interstellar from './assets/Interstellar.jpg';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'Un voleur infiltre les rêves.',
      posterURL: Inception,
      note: 9
    },
    {
      title: 'Interstellar',
      description: "Un voyage à travers l'espace-temps.",
      posterURL: Interstellar,
      note: 8
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.note >= minRating
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">🎬 Cinéma App</h1>
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minRating={minRating}
        setMinRating={setMinRating}
      />
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
};

export default App;
