import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.getElementById('root')!;

const render = () => {
  const App = require('./App').App;
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  try {
    ReactDOM.render(<App />, MOUNT_NODE);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

render();
