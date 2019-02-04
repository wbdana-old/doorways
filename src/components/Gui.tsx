import * as React from 'react';
import {
    GuiContainer,
    DesktopContainer,
    TaskbarContainer,
} from '../styled/components/gui';


export interface IProps {

}

class Gui extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <GuiContainer>
                <DesktopContainer>
                    Desktop
                </DesktopContainer>
                <TaskbarContainer>
                    Taskbar
                </TaskbarContainer>
            </GuiContainer>
        );
    }
}

export default Gui;
