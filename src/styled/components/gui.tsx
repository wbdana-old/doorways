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

export const StartButtonContainer = styled("button")<{ showMenu: boolean }>`
    height: 21px;
`;

export const MenuContainer = styled("div")<{ subMenu?: boolean }>`
    align-items: center;
    background-color: ${props => props.theme.offWhite};
    bottom: 21px;
    display: flex;
    flex-direction: column;
    height: 40%;
    overflow: hidden;
    position: absolute;
    width: 15%;
`;

export const DoorwaysContainer = styled.div`
    
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

export const SubMenuContainer = styled("div")<{ selected?: boolean, index?: number }>`
    align-items: center;
    background-color: ${props => props.theme.offWhite};
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 40%;
    left: 15%;
    position: fixed;
    text-align: center;
    width: 15%;
`;
