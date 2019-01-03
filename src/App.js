import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

import dotenv from 'dotenv';

import './config/reactotron';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'font-awesome/css/font-awesome.css';
import './styles.css';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes>
        <ToastContainer autoClose={5000} />
      </Routes>
    </Fragment>
  </Provider>
);

export default App;
