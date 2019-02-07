import * as React from 'react';
import { HomeContainer } from '../styled/components/home';
import Terminal from '../containers/Terminal';
import Gui from '../containers/Gui';
import { GuiTab } from '../styled/components/guiTab';
import '../App.css';

export interface IProps {
    showGui: boolean;
    toggleGui: () => void;
}

class Home extends React.Component<IProps> {

    toggleGui = () => {
        this.props.toggleGui();
    };

    renderTerminalOrGui = () => {
        if (this.props.showGui) {
            return <Gui />;
        }
        return <Terminal />;
    };

    render() {
        return (
            <HomeContainer
                gui={this.props.showGui}
            >
                <GuiTab
                    onClick={this.toggleGui}
                />
                {this.renderTerminalOrGui()}
            </HomeContainer>
        );
    }
}

export default Home;
