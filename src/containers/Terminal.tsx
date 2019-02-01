import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as terminalActions from '../store/terminal/actions';
import Terminal from '../components/Terminal';
// import { IStoreState } from '../types';
import {
    // ITerminalState,
    TerminalActionTypes,
} from '../store/terminal';

import { ApplicationState } from '../store';

// export function mapStateToProps({ command, currentDirectory, history }: ITerminalState) {
//     return {
//         command,
//         currentDirectory,
//         history,
//     }
// }

const mapStateToProps = ({ terminal }: ApplicationState) => ({
    command: terminal.command,
    currentDirectory: terminal.currentDirectory,
    history: terminal.history,
});

export function mapDispatchToProps(dispatch: Dispatch<TerminalActionTypes>) {
    return {
        submitCommand: (payload: string) => dispatch(terminalActions.submitCommand(payload)),
        updateCommand: (payload: string) => dispatch(terminalActions.updateCommand(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
