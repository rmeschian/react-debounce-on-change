// by Rouben Meschian

import debounce from './debounce';

class DebounceOnChange extends React.Component {
    constructor(props) {
        super(props);
        const that = this;
        that.state = {
            value : props.value
        };
        that.debouncedOnChange = debounce(function() {
            const changeArgs = that.changeArgs || [];
            props.onChange(changeArgs[0], changeArgs[1], changeArgs[2]);
        }, props.wait || 300);
    }

    componentDidUpdate(prevProps, prevState) {
        const that = this,
            {value} = that.state,
            {value : prevValue} = prevState;

        if(value !== prevValue) {
            that.debouncedOnChange();
        }
    }

    render() {
        const that = this,
            {children, extractValue = (e) => e.target.value} = that.props,
            {value} = that.state;


        return React.cloneElement(React.Children.only(children), {
                value,
                onChange : function(e) {
                    e.persist();
                    that.changeArgs = arguments;
                    that.setState({
                        value : extractValue(e)
                    });
                }
            });
    }
}

export default DebounceOnChange;