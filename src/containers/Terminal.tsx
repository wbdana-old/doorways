import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import Terminal from '../components/Terminal';
import { IStoreState } from '../types';

export function mapStateToProps({ command, currentDirectory, history }: IStoreState["terminal"]) {
    return {
        command,
        currentDirectory,
        history,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CommandAction>) {
    return {
        submitCommand: (payload: string) => dispatch(actions.submitCommand(payload)),
        updateCommand: (payload: string) => dispatch(actions.updateCommand(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);