import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Search from './components/SearchComponent';

function App() {
  return (
    <div className="App">
    <Search/>
    <PokemonList/>
    </div>
  );
}

export default App;
