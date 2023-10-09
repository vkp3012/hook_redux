import React from "react"
import { Component } from "react";

class ClassCounter extends Component{
    // create constructor
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    // create a increment Function
    increment = () => {
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
    }

    // create a decrement function
    decrement = () => {
        if(this.state.count === 0){
            return 0;
        }
        this.setState({
            count : this.state.count - 1
        })
    }

    // reset the count Value
    reset = () => {
        this.setState({
            count : 0
        })
    }

    render(){
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>
                    Increment
                </button>
                <button onClick={this.decrement}>
                    Decrement
                </button>
                <button onClick={this.reset}>
                    Reset
                </button>
            </div>
        )
    }
}

export default ClassCounter