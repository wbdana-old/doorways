import { Reducer } from 'redux';
import { SHOW_GUI } from '../../constants';
import {
    IHomeState,
} from './types';

const initialState: IHomeState = {
    showGui: false,
};

const reducer: Reducer<IHomeState> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_GUI:
            return {
                ...state,
                showGui: true,
            };
        default:
            return state;
    }
};

export { reducer as homeReducer };
