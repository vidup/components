import React from 'react';
import "./column.css";

class Column extends React.PureComponent {
  render() {
    return (
      <div className="column">
        {this.props.renderCell(this.props.index)}
      </div>
    );
  }
}

export default Column;
