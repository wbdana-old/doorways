import { Reducer } from 'redux';
import { SUBMIT_COMMAND, UPDATE_COMMAND } from '../../constants';
import {
    ITerminalState,
    // TerminalActionTypes,
    // IHistoryItem,
} from './types';
import { getBashResult } from '../../services/bashResult';

const initialState: ITerminalState = {
    command: '',
    currentDirectory: '/home/guest',
    history: [],
};

const reducer: Reducer<ITerminalState> = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_COMMAND:
            return {
                ...state,
                command: '',
                history: [
                    ...state.history,
                    {
                        command: action.payload,
                        result: getBashResult(state.command),
                    },
                ],
            };
        case UPDATE_COMMAND:
            return {
                ...state,
                command: action.payload,
            };
        default:
            return state;
    }
};

// Instead of using default export, we use named exports, so we can group them in `./index.ts`
export { reducer as terminalReducer};
