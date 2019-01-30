import * as React from 'react';
import { Rotate } from '../styled/components/animations';
import { HomeContainer, PromptInput } from '../styled/components/home';

export interface IProps {
    command: string,
    updateCommand: (payload: string) => void;
    submitCommand: () => void;
}

class Home extends React.Component<IProps> {
    handleChange = (e: any) => {
        this.props.updateCommand(e.target.value);
    };

    handleKeyPress = (e: any) => {
        if (e.keyCode === 13) {
            console.log('hit enter');
        }
    };

    render() {
        const { command } = this.props;
        return (
            <HomeContainer>
                <Rotate>
                    $ {command}
                </Rotate>
                <div>
                    $ {command}
                </div>
                <div className={"prompt"}>
                    $ <PromptInput
                    type={"text"}
                    value={command}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                />
                </div>
            </HomeContainer>
        );
    }
}

export default Home;