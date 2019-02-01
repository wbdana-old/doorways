import {
    combineReducers,
    // Dispatch,
    // Reducer,
    // Action,
    // AnyAction,
} from 'redux';
import {
    ITerminalState,
    terminalReducer,
} from './terminal';
import {
    IHomeState,
    homeReducer,
} from './home';

export interface ApplicationState {
    home: IHomeState,
    terminal: ITerminalState,
}

export const rootReducer = combineReducers<ApplicationState>({
    home: homeReducer,
    terminal: terminalReducer,
});
