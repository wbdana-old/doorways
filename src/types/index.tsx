// Defines shape of state stored by Redux

export interface IStoreState {
    command: string;
    commandPending: boolean;
    commandComplete: boolean;
    currentDirectory: string;
}