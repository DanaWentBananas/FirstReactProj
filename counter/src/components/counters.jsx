import React, { Component } from 'react';
import Counter from './counter'




class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    onDelete=(counterId)=>{
        //filter
        const counters = this.state.counters.filter(c => c.id !== counterId);
        //update
        this.setState({counters});
    }

    reset=()=>{
        const counters = this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counters})
    }

    handleIncrement =(counter)=>{
        const counters = [...this.state.counters];
        const index = counters.map(c=>c.id).indexOf(counter);
        counters[index].value++;
        this.setState({counters});
    }


    render() { 
        return (
            <div>
                <button onClick={this.reset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => 
                <Counter 
                key= {counter.id} 
                value = {counter.value} 
                onDelete={this.onDelete} 
                handleIncrement={this.handleIncrement}
                id={counter.id}>
                    <div>Child #{counter.id}</div>
                </Counter>
                    )}
            </div>
        );
    }
}
 
export default Counters;