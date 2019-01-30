import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import { CommandAction } from './actions';
import App from './App';
import './index.css';
import { command } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './styled/theme';
import { IStoreState } from './types/index';

const store = createStore<IStoreState, CommandAction, any, any>(command, {
    command: 'pwd',
    currentDirectory: '',
    history: [],
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
