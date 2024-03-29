export default interface IThemeInterface {
    gui: boolean;
    showMenu: boolean;
    // subMenu: boolean;

    primaryColor: string;
    primaryColorInverted: string;
    secondaryColor: string;
    secondaryColorInverted: string;

    grey: string;
    offWhite: string;
    darkBlue: string;

    guiBackgroundColor: string;
}

export const theme = {
    primaryColor: '#000',
    primaryColorInverted: '#FFF',
    secondaryColor: '#00C405',
    secondaryColorInverted: '#c1060d',
    grey: '#4e4a4d',
    guiBackgroundColor: '#008080',
    offWhite: '#CDCDCD',
    darkBlue: '#11006A',
};