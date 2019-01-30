import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import Home from '../components/Home';
import { IStoreState } from '../types';

export function mapStateToProps({ command, history }: IStoreState) {
    return {
        command,
        history,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CommandAction>) {
    return {
        submitCommand: (payload: string) => dispatch(actions.submitCommand(payload)),
        updateCommand: (payload: string) => dispatch(actions.updateCommand(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);