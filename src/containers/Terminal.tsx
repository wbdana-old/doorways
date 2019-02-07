import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as terminalActions from '../store/terminal/actions';
import Terminal from '../components/Terminal/Terminal';
import {
    TerminalActionTypes,
} from '../store/terminal';

import { ApplicationState } from '../store';

const mapStateToProps = ({ terminal }: ApplicationState) => ({
    command: terminal.command,
    currentDirectory: terminal.currentDirectory,
    history: terminal.history,
});

const mapDispatchToProps = (dispatch: Dispatch<TerminalActionTypes>) => ({
    submitCommand: (payload: string) => dispatch(terminalActions.submitCommand(payload)),
    updateCommand: (payload: string) => dispatch(terminalActions.updateCommand(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
