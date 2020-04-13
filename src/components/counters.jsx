import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2 "
        >
          Reset
        </button>
        {this.props.counters.map((
          counter // map each counter to a Counter component and set its properties
        ) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    ); // div to wrap all counters
  }
}

export default Counters;
