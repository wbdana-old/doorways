import { CommandAction } from '../actions';
import { SUBMIT_COMMAND, UPDATE_COMMAND } from '../constants';
import { IStoreState } from '../types';
import { getBashResult } from '../util/bashResult';

export function command(state: IStoreState, action: CommandAction): IStoreState {
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
                ]
            };
        case UPDATE_COMMAND:
            return { ...state, command: action.payload };
        default:
            return state;
    }
}