import React, { Component } from 'react'

import DebounceOnChange from 'react-debounce-on-change'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }

    render() {
        const that = this;
        return (<div>
            <DebounceOnChange
                wait={1000}
                value={this.state.value}
                onChange={(e) => {
                    this.setState({value : e.target.value})
                }}
                extractValue={e => e.target.value}
            >
                <input type="text" placeholder="Enter text here" />
            </DebounceOnChange>
            <p>The text was changed to: <b>{that.state.value}</b></p>
        </div>);
    };
}

export default App;