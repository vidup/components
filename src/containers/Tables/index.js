import React from 'react';
import "./styles.css";
import { Table1, Column, Cell } from './Table1';

import { users } from '../../data';
class TablesIndex extends React.PureComponent {
  render() {
    return (
      <div className="tables">
        <Table1
          numRows={users.length}
        >
          <Column
            name="id"
            renderCell={this.renderCell("id")}
          />
          <Column
            name="Prénom"
            renderCell={this.renderCell("first_name")}
          />
          <Column
            name="Nom de famille"
            renderCell={this.renderCell("last_name")}
          />
          <Column
            name="email"
            renderCell={this.renderCell("email")}
          />
          <Column
            name="gender"
            renderCell={this.renderCell("gender")}
          />
          <Column
            name="ip_address"
            renderCell={this.renderCell("ip_address")}
          />
        </Table1>
      </div>
    );
  }

  renderCell = (target) => (index) => {
    return (
      <Cell
        key={index}
        center={["id", "gender", "ip_address"].includes(target)}
      >
        {users[index][target]}
      </Cell>
    );
  }
}

export default TablesIndex;
