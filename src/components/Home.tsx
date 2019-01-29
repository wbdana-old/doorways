import * as React from 'react';
// import css -- styled-components?

export interface IProps {
    command: string,
    updateCommand: (payload: string) => void;
}

function Home({ command, updateCommand }: IProps) {
    const handleChange = (e: any) => {
        updateCommand(e.target.value);
    };

    return (
        <div className={"home"}>
            COMMAND: {command}
            <div className={"prompt"}>
                <input type={"text"} onChange={handleChange} value={command} />
            </div>
        </div>
    );
}

export default Home;