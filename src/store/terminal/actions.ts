import * as constants from '../../constants';
import {
    IUpdateCommand,
    ISubmitCommand,
} from './types';

export function updateCommand(payload: string): IUpdateCommand {
    return {
        payload,
        type: constants.UPDATE_COMMAND,
    };
}

export function submitCommand(payload: string): ISubmitCommand {
    return {
        payload,
        type: constants.SUBMIT_COMMAND,
    };
}
