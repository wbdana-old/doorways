import * as React from 'react';
// import css -- styled-components?

export interface Props {
    command: string,
}

function Home({ command }: Props) {
    return (
        <div className={"home"}>
            COMMAND: {command}
        </div>
    );
}

export default Home;