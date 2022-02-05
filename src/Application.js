import React, {Component} from 'react';
import HighScore from './HighScore';
import "./css/style.css"

class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        };
    }

    // componentWillUnmount(props, state) {

    // }

    // componentDidMount(props, state) {
    //     console.log("mounted with", props, state);
    // }

    // componentWillReceiveProps(props) {
        
    // }

    // this approach triggers the method on every render
    addToCount () {
        console.log('aiuda');
        this.setState({count: this.state.count + 1});
    }

    plusCount = () => {
        this.setState({count: this.state.count + 1});
    }

    handleClick = () => {
        this.setState({count: this.state.count+1});
    }

    componentDidUpdate(props, state) {
        console.log("Old value " + state.count + " new value " + this.state.count);

        if(this.state.count > 10 && !this.state.overTen) {
            console.log('function evaluation');
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render() {
        const {
            count,
            overTen
        } = this.state;

        return (
            <div>
                <h1>Hello world</h1>
                <span>{count}</span>

                {this.state.overTen ? 
                    <h3>Beat high score of 10!</h3> :
                    null
                }
                
                {/* {overTen ? 
                    <HighScore/> :
                    null
                } */}

                <HighScore 
                    overTen={this.state.overTen}
                    // onReset={(e) => this.resetCount(e)}
                    onReset={this.resetCount}
                />

                <HighScore overTen={overTen} />

                <button onClick={() => this.addToCount()}>+</button>
                <button onClick={this.plusCount}>plus</button>
                <button onClick={(e) => this.handleClick()}>Click Me</button>
            </div>
        );
    }
}

export default Application;