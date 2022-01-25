import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello {this.props.name}, you are {this.props.age}
        </p>
      </div>
    );
  }
}
export default Hello;
