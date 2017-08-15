import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers/listReducer';

import './styles/styles.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const state = createStore(reducers).getState();
ReactDOM.render(<App {...state}/>, document.getElementById('app'));
registerServiceWorker();
