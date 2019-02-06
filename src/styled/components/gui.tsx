import styled from '../styled-components';

export const GuiContainer = styled.div`
    align-items: stretch;
    background-color: ${props => props.theme.guiBackgroundColor};
    color: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const DesktopContainer = styled.div`
    background-color: ${props => props.theme.guiBackgroundColor};
    flex-grow: 1;
`;

export const TaskbarContainer = styled.div`
    align-self: flex-end;
    background-color: ${props => props.theme.grey};
    flex-shrink: 0;
    height: 21px;
    position: relative;
    width: 100%;
`;

export const StartButtonContainer = styled("button")<{ menu: boolean }>`
    height: 21px;
`;

export const MenuContainer = styled.div`
    align-items: center;
    background-color: ${props => props.theme.offWhite};
    bottom: 21px;
    display: flex;
    flex-direction: column;
    height: 40%;
    overflow: hidden;
    position: absolute;
    width: 20%;
`;

export const MenuItemContainer = styled.div`
    align-items: center;
    flex: 1;
    text-align: center;
    width: 100%;
    
    &:hover {
        background-color: ${props => props.theme.darkBlue};
        color: ${props => props.theme.primaryColorInverted};
    };
`;
