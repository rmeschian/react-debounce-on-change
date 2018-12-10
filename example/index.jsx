// by Rouben Meschian

class Example extends React.Component {
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
                <input type="text"/>
            </DebounceOnChange>
            <p>{that.state.value}</p>
        </div>);
    };
}

export default Example;