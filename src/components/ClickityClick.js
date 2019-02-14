import React from 'react';

class ClickityClick extends React.Component {
  state = {
    hasBeenClicked: false,
    color: "blue"
  
  }

  handleClick = (event) => {
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    })
    }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null: 'not'} been clicked! </p>
        <button onClick={this.handleClick}>Click Me Im A Button!</button>
      </div>
    )
  }
} export default ClickityClick;
