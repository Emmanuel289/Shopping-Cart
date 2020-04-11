import React, { Component } from "react";

class Counter extends Component {
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); // bind onclick handler to object of counter
  }*/
  state = {
    value: this.props.counter.value, // initialize the count property by setting it to the value
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (item) => {
    console.log(item);
    this.setState({ value: this.state.value + 1 });
  };

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  } */

  render() {
    //console.log("props", this.props); log all the properties or attributes of Counter to the console
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={(item) => this.handleIncrement({ item })}
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
        {this.state.tags.length === 0 && "Please create a new tag"}
      </div>
    );
  }
  // change badge color depending on the current number of items
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  //check current number of items in cart
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
