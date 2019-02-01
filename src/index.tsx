import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {AnyAction, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';

// import { CommandAction } from './actions';
import App from './App';
import './index.css';
import { rootReducer } from './store';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './styled/theme';
// import { IStoreState } from './types';
import { ApplicationState } from './store';

const store = createStore<ApplicationState, AnyAction, any, any>(rootReducer, {
    // app: {
    //     showGui: false,
    // },
    terminal: {
        command: '',
        currentDirectory: '',
        history: [],
    },
    // gui: {
    //     menuOpen: false,
    // },
    // structure: {
    //     root: {
    //         home: {
    //             guest: {
    //
    //             }
    //         }
    //     }
    // },
}, composeWithDevTools());

ReactDOM.render(
<ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
