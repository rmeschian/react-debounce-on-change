# react-debounce-on-change

> Component which debounces change events raised by the child component.

[![NPM](https://img.shields.io/npm/v/react-debounce-on-change.svg)](https://www.npmjs.com/package/react-debounce-on-change) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-debounce-on-change
```

## Usage

```jsx
import React, { Component } from 'react'

import DebounceOnChange from 'react-debounce-on-change'

class Example extends Component {
  render () {
    return (
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
    )
  }
}
```

## License

MIT © [rmeschian](https://github.com/rmeschian)
