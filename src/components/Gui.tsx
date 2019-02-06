import * as React from 'react';
import StartButton from './StartButton';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
    MenuContainer,
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
        return <MenuContainer />
    };

    render() {
        return (
            <GuiContainer>
                <DesktopContainer>

                    Desktop Container

                    {this.renderMenu()}

                </DesktopContainer>
                <TaskbarContainer>
                    <StartButton
                        showMenu={this.props.showMenu}
                        toggleMenu={this.props.toggleMenu}
                    >
                        Start
                    </StartButton>
                    Taskbar Container
                </TaskbarContainer>
            </GuiContainer>
        );
    }
}

export default Gui;
