import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE,
);
