// Defines shape of state stored by Redux

interface IHistoryItem {
    command: string;
    result: string;
}

interface ITerminalState {
    command: string;
    currentDirectory: string;
    history: IHistoryItem[];
}

interface IGuiState {
    menuOpen: boolean;
}

export interface IStoreState {
    app: {
        showGui: boolean;
    };
    terminal: ITerminalState;
    gui: IGuiState;
    structure: {
        root: {
            home: {
                guest: {

                }
            }
        }
    }
}