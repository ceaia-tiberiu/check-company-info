import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './normalize.css';
import './normalize.css';
import './index.css';
import store from './store';
import App from './App';

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
