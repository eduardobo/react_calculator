import React, {Component} from "react";

class CalculatorButton extends Component {
    handleClick = () => {
        this.props.handleEvent(this.props.simbol);
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.simbol}</button>
        )
    }
}

export default CalculatorButton;