// Defines shape of state stored by Redux

export interface IStoreState {
    command: string;
    currentDirectory: string;
    history: string[];
}