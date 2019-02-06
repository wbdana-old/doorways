import * as React from 'react';
import StartButton from './StartButton';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
    MenuContainer,
    MenuItemContainer,
} from '../styled/components/gui';


export interface IProps {
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

    renderMenu = () => {
        if (!this.props.showMenu) {
            return null;
        }
        return (
            <MenuContainer>
                <MenuItemContainer>
                    MenuItemContainer
                </MenuItemContainer>
                <MenuItemContainer>
                    MenuItemContainer 2
                </MenuItemContainer>
                <MenuItemContainer>
                    MenuItemContainer 3
                </MenuItemContainer>
            </MenuContainer>
        );
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
