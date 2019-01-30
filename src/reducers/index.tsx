import { CommandAction } from '../actions';
import { SUBMIT_COMMAND, UPDATE_COMMAND } from '../constants';
import { IStoreState } from '../types';

export function command(state: IStoreState, action: CommandAction): IStoreState {
    switch (action.type) {
        case SUBMIT_COMMAND:
            return { ...state, commandPending: true };
        case UPDATE_COMMAND:
            return { ...state, command: action.payload };
        default:
            return state;
    }
}