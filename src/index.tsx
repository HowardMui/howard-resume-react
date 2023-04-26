import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/pages/App';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE,
);
