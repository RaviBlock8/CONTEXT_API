import React from 'react';
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import AddFrom from './components/AddForm'
import {MovieProvider} from './MovieContext'


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav></Nav>
        <MovieList></MovieList>
        <AddFrom></AddFrom>
      </div>
    </MovieProvider>
    
  );
}

export default App;
