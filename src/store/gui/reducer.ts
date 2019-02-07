import { Reducer } from 'redux';
import { SELECT_MENU_ITEM, TOGGLE_MENU } from '../../constants';
import {
    IGuiState,
} from './types';

const initialState: IGuiState = {
    selectedMenuItem: null,
    showMenu: false,
};

const reducer: Reducer<IGuiState> = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu,
            };
        case SELECT_MENU_ITEM:
            if (state.selectedMenuItem === action.payload) {
                return {
                    ...state,
                    selectedMenuItem: null,
                };
            }
            return {
                ...state,
                selectedMenuItem: action.payload,
            };
        default:
            return state;
    }
};

export { reducer as guiReducer };
