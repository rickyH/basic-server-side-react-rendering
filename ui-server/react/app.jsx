import React from 'react';

export default class App extends React.Component {

  state = {
    count: 5
  }

  count = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="app" >
        <span onClick={this.count}>{this.state.count}</span>
      </div>
    );
  }
}
