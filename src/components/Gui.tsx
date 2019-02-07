import * as React from 'react';
import StartButton from './StartButton';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
    MenuContainer,
    MenuItemContainer,
    // SubMenuContainer,
} from '../styled/components/gui';
import { MENU_OPTIONS } from './MenuOptions';


export interface IProps {
    selectedMenuItem: any; // TODO WBD Fix this
    selectMenuItem: (payload: number) => void;
    showMenu: boolean;
    toggleMenu: () => void;
}

class Gui extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount(): void {
        console.log("Gui props:", this.props);
    }

    // renderMenu = () => {
    //     if (!this.props.showMenu) {
    //         return null;
    //     }
    //     return (
    //         <MenuContainer>
    //             <MenuItemContainer>
    //                 MenuItemContainer >
    //                 {/*<MenuContainer subMenu={true}>*/}
    //                     {/*<MenuItemContainer>*/}
    //                         {/*Sub Menu Item 1*/}
    //                     {/*</MenuItemContainer>*/}
    //                 {/*</MenuContainer>*/}
    //             </MenuItemContainer>
    //             <MenuItemContainer>
    //                 MenuItemContainer 2
    //             </MenuItemContainer>
    //             <MenuItemContainer>
    //                 MenuItemContainer 3
    //             </MenuItemContainer>
    //         </MenuContainer>
    //     );
    // };

    renderMenu = () => {
        // const { selectedMenuItem } = this.props;
        // if (!selectedMenuItem) {
        //     return null;
        // }
        if (!this.props.showMenu) {
            return null;
        }
        return (
            <MenuContainer>
                {MENU_OPTIONS.map((menuItem, index)=> {
                    return (
                        <MenuItemContainer key={index}>
                            {menuItem.option}
                        </MenuItemContainer>
                    );
                })}
            </MenuContainer>
        )
    };

    // renderSubMenu = () => {
    //     console.log(this.props);
    //     if (!this.props.selectedMenuItem) {
    //         return null;
    //     }
    //     // TODO WBD For submenus, iterate over menu options
    //     // If index === this.props.selectedMenuItem,
    //     // set display: flex (or whatever) on styled component props
    //     // else display: none;
    //
    //     // TODO WBD Or is a better approach to just render the one subMenu if it's selected? Probably.
    //     return (
    //         <SubMenuContainer>
    //
    //         </SubMenuContainer>
    //     )
    // };

    render() {
        return (
            <GuiContainer>
                {this.renderMenu()}
                <DesktopContainer>

                    Desktop Container

                </DesktopContainer>
                <TaskbarContainer>

                    <StartButton
                        showMenu={this.props.showMenu}
                        toggleMenu={this.props.toggleMenu}
                    >
                        Start
                    </StartButton>
                </TaskbarContainer>
            </GuiContainer>
        );
    }
}

export default Gui;
