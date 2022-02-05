import React, {Component} from "react";

class HighScore extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         overTen: props.overTen
    //     };
    // }

    render() {
        if(this.props.overTen) {
            return (
                <h3>Beat high score of 10! from component
                    <button onClick={(e) => this.props.onReset(e)}>Reset</button>
                    <button onClick={this.props.onReset}>Reset fancy</button>
                </h3>
            )
        }

        return null;

        // return (
        //     <div>
        //         {this.state.overTen ? 
        //             <h3>Beat high score of 10! from component</h3> : null
        //         }
        //     </div>
        // )
    }
}

export default HighScore;