// TODO WBD Replace this component with a connected Home component to toggle GUI/Terminal views

import * as React from 'react';
import Terminal from './containers/Terminal';
import './App.css';

class App extends React.Component {


    public render() {
        return (
            <div className={"App"}>
                <Terminal />
            </div>
        );
    }
}

export default App;
