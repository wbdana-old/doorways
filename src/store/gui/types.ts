import * as constants from '../../constants';

export interface IToggleMenu {
    type: constants.TOGGLE_MENU;
}

export interface ISelectMenuItem {
    type: constants.SELECT_MENU_ITEM;
    payload: number;
}

export type GuiActionTypes = IToggleMenu | ISelectMenuItem;

export interface IGuiState {
    showMenu: boolean;
    selectedMenuItem?: number | null;
}
