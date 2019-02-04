import { Reducer } from 'redux';
import { TOGGLE_GUI } from '../../constants';
import {
    IHomeState,
} from './types';

const initialState: IHomeState = {
    showGui: true,  // TODO WBD set this back to false
};

const reducer: Reducer<IHomeState> = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GUI:
            return {
                ...state,
                showGui: !state.showGui,
            };
        default:
            return state;
    }
};

export { reducer as homeReducer };
