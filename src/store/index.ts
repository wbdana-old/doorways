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
import {
    IGuiState,
    guiReducer,
} from './gui';

export interface ApplicationState {
    gui: IGuiState,
    home: IHomeState,
    terminal: ITerminalState,
}

export const rootReducer = combineReducers<ApplicationState>({
    gui: guiReducer,
    home: homeReducer,
    terminal: terminalReducer,
});
