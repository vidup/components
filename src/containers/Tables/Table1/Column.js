import React from 'react';
import "./styles.css";
import { range } from 'lodash';

class Column extends React.PureComponent {
  render() {
    return (
      <div className="column">
        <div className="header">{this.props.name}</div>
        {range(this.props.numRows).map((i) =>
          this.props.renderCell(i)
        )}
      </div>
    );
  }
}

export default Column;
