import * as React from 'react';
import StartButton from './Menu/StartButton';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
    MenuContainer,
    MenuItemContainer,
    SubMenuContainer,
} from '../styled/components/gui';
import { MENU_OPTIONS } from './Menu/MenuOptions';


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
        console.log(MENU_OPTIONS);
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

    selectMenuItem = (index: number) => {
        // console.log(index);
        this.props.selectMenuItem(index);
    };

    renderMenu = () => {
        // const { selectedMenuItem } = this.props;
        // if (!selectedMenuItem) {
        //     return null;
        // }
        if (!this.props.showMenu) {
            return null;
        }
        return (

            // TODO Break Menu, MenuItem out into stateless components
            // so as to avoid binding a function in onClick
            <MenuContainer>
                {MENU_OPTIONS.map((menuItem, index)=> {
                    return (
                        <MenuItemContainer
                            key={index}
                            onClick={() => this.selectMenuItem(index)}
                        >
                            {menuItem.option}
                        </MenuItemContainer>
                    );
                })}
                {this.renderSubMenu()}
            </MenuContainer>
        )
    };

    renderSubMenu = () => {
        console.log(this.props);
        const { selectedMenuItem } = this.props;
        // if (!selectedMenuItem || selectedMenuItem === 0) {
        //     return null;
        // }
        // TODO WBD This really needs to change. Should be null by default.
        if (selectedMenuItem === undefined) {
            return null;
        }
        console.log('rendering', MENU_OPTIONS[selectedMenuItem]);
        return (
            <SubMenuContainer>
                {MENU_OPTIONS[selectedMenuItem].subs.map((sub, index) => {
                    return (
                        <MenuItemContainer
                            key={index}
                        >
                            {sub.title}
                        </MenuItemContainer>
                    );
                })}
            </SubMenuContainer>
        )
    };

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
