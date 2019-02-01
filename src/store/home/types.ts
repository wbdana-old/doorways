import * as constants from '../../constants';

export interface IToggleGui {
    type: constants.TOGGLE_GUI;
}

export type HomeActionTypes = IToggleGui;

export interface IHomeState {
    showGui: boolean;
}
