import * as constants from '../../constants';
import {
    ISelectMenuItem,
    IToggleMenu,
} from './types';

export function toggleMenu(): IToggleMenu {
    return {
        type: constants.TOGGLE_MENU,
    }
}

export function selectMenuItem(payload: number): ISelectMenuItem {
    return {
        type: constants.SELECT_MENU_ITEM,
        payload,
    }
}
