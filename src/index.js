import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'store';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);