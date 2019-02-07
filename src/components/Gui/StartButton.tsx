import * as React from 'react';
import { StartButtonContainer } from '../../styled/components/gui';

export interface IProps {
    showMenu: boolean;
    toggleMenu: () => void;
}

const StartButton: React.SFC<IProps> = (props) => (
    <StartButtonContainer
        onClick={props.toggleMenu}
        showMenu={props.showMenu}
    >
        Start
    </StartButtonContainer>
);

export default StartButton;
