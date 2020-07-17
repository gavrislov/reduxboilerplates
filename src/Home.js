import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, changeCount } from "./actions/countActions";

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             numberInput: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            numberInput: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.changeCount(Number(this.state.numberInput));
        this.setState({
            numberInput: 0,
        })
    }
    
    render() {
        return (
            <>
            <h1>Hello</h1>
        <p>Current Count: {this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <br/>
        <input type="number" value={this.state.numberInput} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Change Count</button>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.countFirst.countSecond,
})

export default connect( mapStateToProps , { increment, decrement, changeCount } )(Home);