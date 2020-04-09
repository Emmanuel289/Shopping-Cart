import React, {Component} from 'react';

class Counter extends Component{
    state ={
        count: 3,
        tags: ['tag1', 'tag2', 'tag3']
        
    };

    render(){
        

        return (
        <div>
             <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
             <button className = "btn btn-secondary btn-sm">Increment</button>
             <ul> 
                {this.state.tags.map(tag =><li key = {tag}>{tag}</li>)} 

             </ul>
        </div>
        );


    }
    // change badge color depending on the current number of items
    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }
    //check current number of items in cart
    formatCount(){
        const {count} = this.state
        return count===0 ? 'Zero': count;
    }



}
export default Counter;