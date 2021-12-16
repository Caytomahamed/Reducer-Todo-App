import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore } from 'redux'
import { Provider } from 'react-redux'
import { TodoReducer } from './reducers/Todoreducer';

const store = createStore(TodoReducer)
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);


