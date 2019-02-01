import * as constants from '../../constants';
import {
    IShowGui,
} from './types';

export function showGui(): IShowGui {
    return {
        type: constants.SHOW_GUI,
    };
}

