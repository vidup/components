import React from 'react';
import './styles.css';

class Cell extends React.PureComponent {
  render() {
    return (
      <div className={`cell ${this.props.center ? "center" : ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Cell;
