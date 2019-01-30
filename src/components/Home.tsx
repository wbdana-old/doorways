import * as React from 'react';
import { Rotate } from '../styled/components/animations';
import { HomeContainer, PromptInput } from '../styled/components/home';
import HistoryLine from './HistoryLine';

export interface IProps {
    command: string,
    history: any,
    updateCommand: (payload: string) => void;
    submitCommand: (payload: string) => void;
}

class Home extends React.Component<IProps> {
    handleChange = (e: any) => {
        this.props.updateCommand(e.target.value);
    };

    handleKeyPress = (e: any) => {
        if (e.keyCode === 13) {
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
                {history.map((historyItem: { command: string, result: string }, index: number) => (
                    <HistoryLine
                        historyItem={historyItem}
                        key={index}
                    />
                ))}
                <div className={"prompt"}>
                    guest@wbdana $ <PromptInput
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