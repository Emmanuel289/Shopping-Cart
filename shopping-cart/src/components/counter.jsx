import React, { Component } from "react";

class Counter extends Component {
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); // bind onclick handler to object of counter
  }*/
  state = {
    count: 3,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
  // change badge color depending on the current number of items
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  //check current number of items in cart
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
