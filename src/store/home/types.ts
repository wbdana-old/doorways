import * as constants from '../../constants';

export interface IShowGui {
    type: constants.SHOW_GUI;
}

export interface IHomeState {
    showGui: boolean;
}