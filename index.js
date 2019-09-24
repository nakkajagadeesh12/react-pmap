import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Main from './Main';
import MapComponent from './MapComponent';

const App = () => {
  return (
    <Main>
      <MapComponent />
    </Main>
  )
}

render(<App />, document.getElementById('root'));
