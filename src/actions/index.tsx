import * as constants from '../constants';

export interface IUpdateCommand {
    type: constants.UPDATE_COMMAND;
    payload: string;
}

export interface ISubmitCommand {
    type: constants.SUBMIT_COMMAND;
    payload: string;
}

export type CommandAction = IUpdateCommand | ISubmitCommand;

export function updateCommand(payload: string): IUpdateCommand {
    console.log(payload);
    return {
        payload,
        type: constants.UPDATE_COMMAND,
    }
}

export function submitCommand(payload: string): ISubmitCommand {
    return {
        payload,
        type: constants.SUBMIT_COMMAND,
    }
}