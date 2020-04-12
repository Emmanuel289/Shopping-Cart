import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //called after a component's states or props are updated.
    //the new state/props are compared with the old values and if there's a change,
    //an Ajax request can be made to the server to get new data and if there are no new changes,
    //then no reqs are made
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Make an Ajax call to a server and get new data if previous state is different than the current state
    }
  }

  componentWillUnmount() {
    //called before a component is removed from the DOM
    console.log("Counter-Unmount");
  }
  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  // change badge color depending on the current number of items
  getBadgeClasses() {
    let classes = "badge m-2";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  //check current number of items in cart
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
