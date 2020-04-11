import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // add a counters key whose value is an array of counter objects
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId); //decalre a counter constant and filter out the id from the counter
    this.setState({ counters: counters }); // update the counter array in the state to the new counter constant
    //this.setState({ counters}) also works because the key and value names are the same.
  };

  render() {
    return (
      <div>
        {this.state.counters.map((
          counter // map each counter to a Counter component and set its properties
        ) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    ); // div to wrap all counters
  }
}

export default Counters;
