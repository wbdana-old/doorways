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

export interface ApplicationState {
    terminal: ITerminalState,
}

export const rootReducer = combineReducers<ApplicationState>({
    terminal: terminalReducer,
});
