export default interface IThemeInterface {
    gui: boolean;
    primaryColor: string;
    primaryColorInverted: string;
    secondaryColor: string;
    secondaryColorInverted: string;
    grey: string;
}

export const theme = {
    primaryColor: '#000',
    primaryColorInverted: '#FFF',
    secondaryColor: '#00C405',
    secondaryColorInverted: '#c1060d',
    grey: '#4e4a4d',
};