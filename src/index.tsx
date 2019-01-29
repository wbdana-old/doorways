import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { CommandAction } from './actions';
import App from './App';
import './index.css';
import { command } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types/index';

const store = createStore<IStoreState, CommandAction, any, any>(command, {
    command: 'pwd',
    commandComplete: false,
    commandPending: false,
    currentDirectory: '',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
