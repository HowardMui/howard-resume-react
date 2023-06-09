import React from 'react';
// import * as ReactDOM from 'react-dom';
import App from './app/pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import 'theme/index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

Modal.setAppElement('#root');
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
);
