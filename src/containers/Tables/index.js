import React from 'react';
import "./styles.css";
import { Table1, Column } from './Table1';

import { users } from '../../data';
class TablesIndex extends React.PureComponent {
  render() {
    return (
      <div className="tables">
        <Table1
          numRows={users.length}
        >
          <Column
            renderCell={this.renderCell("id")}
          />
          <Column
            renderCell={this.renderCell("first_name")}
          />
          <Column
            renderCell={this.renderCell("last_name")}
          />
        </Table1>
      </div>
    );
  }

  renderCell = (target) => (index) => {
    return users[index][target];
  }
}

export default TablesIndex;
