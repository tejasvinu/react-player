import React from 'react';
//import styles
import './styles/app.scss';
//adding components
import Player from './components/player';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player/>
    </div>
  );
}

export default App;
