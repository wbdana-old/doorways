import * as constants from '../constants/index';
import { help } from './help';

export const getBashResult = (command: string) => {
    const {
        HELP,
        LS,
        PWD,
    } = constants;
    switch (command) {
        case LS:
            return '';
        case PWD:
            return '/home/guest';
        case HELP:
            return help;
        default:
            return `bash: ${command}: command not found`;
    }
};