import * as constants from '../constants';

export const getBashResult = (command: string) => {
    const {
        LS,
        PWD,
    } = constants;
    switch (command) {
        case LS:
            return '';
        case PWD:
            return '/home/guest';
        default:
            return `bash: ${command}: command not found`;
    }
};