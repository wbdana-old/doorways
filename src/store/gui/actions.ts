import * as constants from '../../constants';
import {
    IToggleMenu,
} from './types';

export function toggleMenu(): IToggleMenu {
    return {
        type: constants.TOGGLE_MENU,
    }
}
