import * as constants from '../constants';

export interface IUpdateCommand {
    type: constants.UPDATE_COMMAND;
    payload: string;
}

export interface ISubmitCommand {
    type: constants.SUBMIT_COMMAND;
}

export type CommandAction = IUpdateCommand | ISubmitCommand;

export function updateCommand(payload: string): IUpdateCommand {
    return {
        payload,
        type: constants.UPDATE_COMMAND,
    }
}

export function submitCommand(): ISubmitCommand {
    return {
        type: constants.SUBMIT_COMMAND,
    }
}