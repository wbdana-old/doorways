// Defines shape of state stored by Redux

interface IHistoryItem {
    command: string;
    result: string;
}

export interface IStoreState {
    command: string;
    currentDirectory: string;
    history: IHistoryItem[];
}