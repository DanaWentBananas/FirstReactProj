import React, { Component } from 'react';

class Counter extends Component {
    state = {
        imgUrl: "https://picsum.photos/200",
        tags: ['tag1','tag2','tag3']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    

    render() { 

        return (
        <React.Fragment>
            <div className= "container">
                <div className="row">

                    <div className="col-sm">

                        {this.props.children}
                        <span style= {{fontSize: 15}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <button onClick = {()=>this.props.handleIncrement(this.props.id)} className = "btn btn-secondary btn-sm m-2">Increment</button>
                        {/* {this.renderTags()} */}
                        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>

                    </div>

                </div>
            </div>
        </React.Fragment>
        );
    }

    
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>
                    {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
               </ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount () {
        const value = this.props.value;
        return value === 0 ? <div>Zero</div> : value;
        
    }
}
 
export default Counter;