import { CommandAction } from '../actions';
import { SUBMIT_COMMAND, UPDATE_COMMAND } from '../constants';
import { IStoreState } from '../types';
import { getBashResult } from '../services/bashResult';

export function command(state: IStoreState, action: CommandAction): IStoreState {
    switch (action.type) {
        case SUBMIT_COMMAND:
            return {
                ...state,
                terminal: {
                    ...state.terminal,
                    command: '',
                    history: [
                        ...state.terminal.history,
                        {
                            command: action.payload,
                            result: getBashResult(state.terminal.command),
                        },
                    ]
                }
            };
        case UPDATE_COMMAND:
            return {
                ...state,
                terminal: {
                    ...state.terminal,
                    command: action.payload
                }
            };
        default:
            return state;
    }
}