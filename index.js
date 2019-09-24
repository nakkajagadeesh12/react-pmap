import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Main from './Main';
import MapComponent from './MapComponent';
import { StoreProvider } from './Store';

const App = () => {
  return (
    <Main>
      <MapComponent />
    </Main>
  )
}

render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));
