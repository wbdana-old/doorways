import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import Home from '../components/Home';
import { IStoreState } from '../types/index';

export function mapStateToProps({ command }: IStoreState) {
    return {
        command,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CommandAction>) {
    return {
        submitCommand: () => dispatch(actions.submitCommand()),
        updateCommand: (payload: string) => dispatch(actions.updateCommand(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);