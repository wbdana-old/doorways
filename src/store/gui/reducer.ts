import { Reducer } from 'redux';
import { TOGGLE_MENU } from '../../constants';
import {
    IGuiState,
} from './types';

const initialState: IGuiState = {
    showMenu: false,
};

const reducer: Reducer<IGuiState> = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu,
            };
        default:
            return state;
    }
};

export { reducer as guiReducer };
