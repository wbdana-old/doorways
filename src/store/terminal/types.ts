import * as constants from '../../constants';

export interface IUpdateCommand {
    type: constants.UPDATE_COMMAND;
    payload: string;
}

export interface ISubmitCommand {
    type: constants.SUBMIT_COMMAND;
    payload: string;
}

export type TerminalActionTypes = IUpdateCommand | ISubmitCommand;

export interface IHistoryItem {
    command: string;
    result: string;
}

export interface ITerminalState {
    command: string;
    currentDirectory: string;
    history: IHistoryItem[];
}
