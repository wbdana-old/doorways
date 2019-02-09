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

export const MenuContainerWrapper = styled("div")<{  }>`
    background-color: ${props => props.theme.secondaryColorInverted};
    bottom: 21px;
    display: grid;
    grid-template: 100% / 5% 1fr 1fr;
    height: 40%;
    position: absolute;
    width: 20%;
    
    z-index: 10;
`;

export const DoorwaysContainer = styled.div`
    background-color: ${props => props.theme.darkBlue};
    color: ${props => props.theme.offWhite};
    display: flex;
    
    * {

    }
`;

export const DoorwaysTextContainer = styled.div`
    color: ${props => props.theme.offWhite};
    font-size: 12px;
    font-weight: 700;
    flex: 1;
    
    position: absolute;
    bottom: 0%;
    left: 2%;
    
    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform-origin: center left;
`;

// background-color: ${props => props.theme.darkBlue};
// color: ${props => props.theme.offWhite};
// font-size: 12px;
//
// transform: rotate(-90deg);
// transform-origin: center left;



export const MenuContainer = styled("div")<{ subMenu?: boolean }>`
    align-items: center;
    background-color: ${props => props.theme.offWhite};
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    width: 100%;
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
    flex-direction: column;

    text-align: center;
`;
