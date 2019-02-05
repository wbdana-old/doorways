import * as constants from '../../constants';
import {
    IToggleGui,
} from './types';

export function toggleGui(): IToggleGui {
    return {
        type: constants.TOGGLE_GUI,
    };
}
