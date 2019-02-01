import * as React from 'react';
import { Rotate } from '../styled/components/animations';
import { TerminalContainer, PromptInput } from '../styled/components/terminal';
import HistoryLine from './HistoryLine';

export interface IProps {
    command: string;
    currentDirectory: string;
    history: [];
    updateCommand: (payload: string) => void;
    submitCommand: (payload: string) => void;
}

class Terminal extends React.Component<IProps> {
    private readonly promptInput: React.RefObject<HTMLInputElement>;
    constructor(props: IProps) {
        super(props);

        this.promptInput = React.createRef<HTMLInputElement>();
    }

    componentDidMount() {
        this.focus();
    }

    componentDidUpdate() {
        this.focus();
    }

    focus = () => {
        const input = this.promptInput.current;

        if (input) {
            input.focus();
        }
    };

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
            <TerminalContainer>
                <Rotate>
                    $ wbdana
                </Rotate>

                {
                    history.map(
                        (historyItem: { command: string, result: string }, index: number) => (
                            <HistoryLine
                                historyItem={historyItem}
                                key={index}
                            />
                        )
                    )
                }

                <div className={"prompt"}>
                    guest@wbdana $ <PromptInput
                        ref={this.promptInput}
                        type={"text"}
                        value={command}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress}
                    />
                </div>
            </TerminalContainer>
        );
    }
}

export default Terminal;