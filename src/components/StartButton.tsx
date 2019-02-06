import * as React from 'react';
import { StartButtonContainer } from '../styled/components/gui';

export interface IProps {
    showMenu: boolean;
    toggleMenu: () => void;
}

class StartButton extends React.Component<IProps> {
    componentDidMount(): void {
        console.log(this.props);
    }

    render() {
        return (
            <StartButtonContainer
                showMenu={this.props.showMenu}
                onClick={this.props.toggleMenu}
            >
                Start
            </StartButtonContainer>
        )
    }
}

export default StartButton;
