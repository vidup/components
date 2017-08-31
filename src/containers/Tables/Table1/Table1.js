import React from 'react';
import "./styles.css";


class Table extends React.PureComponent {
  render() {
    return (
      <div className="table">
        {React.Children.map(this.props.children,
          (child, index) => React.cloneElement(child, {
            numRows: this.props.numRows
          })
        )}
      </div>
    );
  }
}

export default Table;
