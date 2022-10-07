import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { configureStore as createStore} from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer';
/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

const reduxStore = createStore({
  reducer: mainReducer
})

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
