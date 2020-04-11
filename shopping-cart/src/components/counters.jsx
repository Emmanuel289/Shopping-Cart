import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // add a counters key whose value is an array of objects
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((
          counter // map each counter to a Counter component and set its properties
        ) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    ); // div to wrap all counters
  }
}

export default Counters;
