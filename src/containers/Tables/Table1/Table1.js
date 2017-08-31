import React from 'react';
import "./styles.css";


class Table extends React.PureComponent {
  render() {
    return (
      <div className="table">
        {this.props.children}
      </div>
    );
  }
}

export default Table;
