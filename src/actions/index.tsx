import * as constants from '../constants';

export interface UpdateCommand {
    type: constants.UPDATE_COMMAND;
    payload: string;
}

export interface SubmitCommand {
    type: constants.SUBMIT_COMMAND;
}

export type CommandAction = UpdateCommand | SubmitCommand;

export function updateCommand(payload: string): UpdateCommand {
    return {
        type: constants.UPDATE_COMMAND,
        payload,
    }
}
