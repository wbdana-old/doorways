import { CommandAction } from './actions';
import { SUBMIT_COMMAND, UPDATE_COMMAND } from '../../constants';
import { ITerminalState } from '../../types';
import { getBashResult } from '../../services/bashResult';

function terminalReducer(state: ITerminalState, action: CommandAction): ITerminalState {
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
                    }
                ],
                // ...state,
                // terminal: {
                //     ...state.terminal,
                //     command: '',
                //     history: [
                //         ...state.terminal.history,
                //         {
                //             command: action.payload,
                //             result: getBashResult(state.terminal.command),
                //         },
                //     ]
                // }
            };
        case UPDATE_COMMAND:
            return {
                ...state,
                command: action.payload,
                // ...state,
                // terminal: {
                //     ...state.terminal,
                //     command: action.payload
                // }
            };
        default:
            return state;
    }
}

export default terminalReducer;