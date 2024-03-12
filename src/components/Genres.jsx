import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Genres = ({ onGenreSelect }) => {
  const bookGenres = [
    'Literary',
    'Science',
    'Fantasy',
    'Historical',
    'Horror',
    'Romance',
    'Adventure',
    'Graphic',
    'Mystery',
    'Adult',
    'Classics',
    'Memoir',
    'Short',
    'Thriller',
    'mysteries',
    'Selfhelp',
    'Humor'
  ];

  const history = useHistory();

  const handleGenreClick = (genre) => {
    const formattedGenre = genre.toLowerCase().replace(/\s/g, '-');
    history.push(`/genres/${formattedGenre}`);
    onGenreSelect(genre); // Pass the selected genre to the parent component
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarGenres"
          aria-controls="navbarGenres"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarGenres">
          <ul className="navbar-nav">
            {bookGenres.map((genre, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={`/genres/${genre.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Genres;