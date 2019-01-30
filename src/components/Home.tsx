import * as React from 'react';
import { Rotate } from '../styled/components/animations';
import { HomeContainer, PromptInput } from '../styled/components/home';

export interface IProps {
    command: string,
    history: string[],
    updateCommand: (payload: string) => void;
    submitCommand: (payload: string) => void;
}

class Home extends React.Component<IProps> {
    handleChange = (e: any) => {
        this.props.updateCommand(e.target.value);
    };

    handleKeyPress = (e: any) => {
        if (e.keyCode === 13) {
            console.log('hit enter');
            this.props.submitCommand(e.target.value);
        }
    };

    render() {
        const { command, history } = this.props;
        return (
            <HomeContainer>
                <Rotate>
                    $ command_prompt()
                </Rotate>
                <div>
                    $ {command}
                </div>
                <div>
                    {history.join(',\n ')}
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