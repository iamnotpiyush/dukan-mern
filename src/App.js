// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Genres from './components/Genres';
import Cart from './components/Cart';
import Literary from './components/GenreComponents/Literary';
import Selfhelp from './components/GenreComponents/Selfhelp';
import Humor from './components/GenreComponents/Humor';
import Science from './components/GenreComponents/Science';
import Historical from './components/GenreComponents/Historical';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import ContributeForm from './components/ContributeForm';

const GenreRouter = ({ match, selectedGenre }) => {
  const { genre } = match.params;

  switch (genre) {
    case 'literary':
      return <Literary selectedGenre={selectedGenre} />;
    case 'selfhelp':
      return <Selfhelp selectedGenre={selectedGenre} />;
    case 'humor':
      return <Humor selectedGenre={selectedGenre} />;
    case 'science':
      return <Science selectedGenre={selectedGenre}></Science>;
    case 'historical':
      return <Historical selectedGenre={selectedGenre}></Historical>;
    default:
      return <div>No component found for the selected genre</div>;
  }
};

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelection = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Genres onGenreSelect={handleGenreSelection} />
            <Products />
          </Route>
          <Route path="/genres/:genre" render={(props) => <GenreRouter {...props} selectedGenre={selectedGenre} />} />
          <Route path="/cart" component={Cart} />
          <Route path="/contribute" component={ContributeForm} />
        </Switch>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
