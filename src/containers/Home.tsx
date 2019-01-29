import Home from './components/Home';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ command }: StoreState) {
    return {
        command,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.>)