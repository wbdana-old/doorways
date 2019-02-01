import * as React from 'react';
import { HomeContainer } from '../styled/components/home';
import Terminal from '../containers/Terminal';
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

    renderTerminal = () => {
        if (this.props.showGui) {
            return null;
        }
        return <Terminal/>;
    };

    render() {
        return (
            <HomeContainer>
                <GuiTab
                    onClick={this.toggleGui}
                />
                {this.renderTerminal()}
            </HomeContainer>
        );
    }
}

export default Home;
