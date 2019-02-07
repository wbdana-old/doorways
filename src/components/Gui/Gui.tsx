import * as React from 'react';
import Menu from './Menu';
import StartButton from './StartButton';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
} from '../../styled/components/gui';
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
        console.log(MENU_OPTIONS);
    }

    handleSelectMenuItem = (id: number) => {
        this.props.selectMenuItem(id);
    };

    renderMenu = () => {
        if (!this.props.showMenu) {
            return null;
        }

        return (
            <Menu
                handleSelectMenuItem={this.handleSelectMenuItem}
                selectedMenuItem={this.props.selectedMenuItem}
            />
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
