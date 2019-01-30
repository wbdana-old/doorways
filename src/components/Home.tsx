import * as React from 'react';
import { Rotate } from '../styled/components/animations';
import { HomeContainer, PromptInput } from '../styled/components/home';

export interface IProps {
    command: string,
    updateCommand: (payload: string) => void;
}

function Home({ command, updateCommand }: IProps) {
    const handleChange = (e: any) => {
        updateCommand(e.target.value);
    };

    return (
        <HomeContainer>
            <Rotate>
                $ {command}
            </Rotate>
            <div>
                $ {command}
            </div>
            <div className={"prompt"}>
                $ <PromptInput type={"text"} onChange={handleChange} value={command} />
            </div>
        </HomeContainer>
    );
}

export default Home;