import * as constants from '../../constants';

export interface IToggleMenu {
    type: constants.TOGGLE_MENU;
}

export type GuiActionTypes = IToggleMenu;

export interface IGuiState {
    showMenu: boolean;
}
