import React, {Component} from "react";
import CalculatorButton from "./CalculatorButton";

class Calculator extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentOperation: "0",
            result: '' 
        }
    }

    catchSimbol = (value) => {
        if(value === "=") {
            this.calculateResult()
            this.setState({currentOperation: 0});
            return;
        }

        this.setState({
            currentOperation: (this.state.currentOperation == "0" ? value : this.state.currentOperation + `${value}`)
        });
    }

    calculateResult() {
        let numbers = this.state.currentOperation.match(/\d+/g);
        let operators = this.state.currentOperation.match(/\D/g);
        let position = 0;
        console.log('operation: ' + this.state.currentOperation);

        while(operators.length > 0) {
            for(let i = 0; i < operators.length; i++) {
                if(this.getOperatorHerarchy(operators[i]) === position) {
                    numbers[i] = this.makeOperation(numbers[i], numbers[i + 1], operators[i]);;
                    console.log(numbers[i]);
                    numbers.splice(i + 1, 1);
                    operators.splice(i, 1);
                    i--;
                }
            }
            position++;

            if(position > 5) {
                console.log('position reached');
                break;
            }
        }
        console.log('result:' +  numbers[0]);
        this.setState({result: numbers[0]});
    }

    getOperatorHerarchy(operator) {
        const operatorsHerarchy = [
            {herarchy: 0, operator: '^'},
            {herarchy: 1, operator: '*'}, 
            {herarchy: 1, operator: '/'}, 
            {herarchy: 2, operator: '+'},
            {herarchy: 2, operator: '-'}
        ];

        let currentOerator = operatorsHerarchy.filter((operatorHerarchy) => {
            return operatorHerarchy.operator === operator;
        });

        return currentOerator[0].herarchy;
    }
    
    makeOperation(number1, number2, operator) {
        console.log(number1, number2, operator);
        switch (operator) {
            case "+": {
                return Number(number1) + Number(number2);
            }
            case "-": {
                return Number(number1) - Number(number2);
            }
            case "*": {
                return Number(number1) * Number(number2);
            }
            case "/": {
                return Number(number1) / Number(number2);
            }
            case "^": {
                return Number(number1) ^ Number(number2);
            }
        }
    }

    render() {
        const {
            currentOperation,
            result
        } = this.state;
        let numberButtons = [];
        let rigthButtons = [];
        let bottonButtons = [];
        const buttonsRight = ["/", "*", "-", "+"];
        const buttonsBotton = [0, ".", "="];

        for (const button of buttonsRight) {
            rigthButtons.push(<CalculatorButton key={button} simbol={button} handleEvent={this.catchSimbol}/>);
        }

        for (const button of buttonsBotton) {
            bottonButtons.push(<CalculatorButton key={button} simbol={button} handleEvent={this.catchSimbol}/>);
        }

        for (let i = 1; i <= 9; i++) {
            numberButtons.push(<CalculatorButton key={i} simbol={i} handleEvent={this.catchSimbol}/>);
        }
        return (
        <div>
            <h1>Supra calculator</h1>

            <div id="screen">
                <div id="previous-result">{result}</div>

                <div id="current-operation">{currentOperation}</div>
            </div>

            <div id="buttons" style={{display: "flex"}}>
                <div id="numbers" style={{maxWidth: "210px"}}>
                    {numberButtons}

                    {bottonButtons}
                </div>

                <div id="operations" style={{maxWidth: "70px"}}>
                    {rigthButtons}
                </div>
            </div>
        </div>
        )
    }
}

export default Calculator;