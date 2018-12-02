import React from 'react';
import { Table } from 'antd';
import './TableTickets.css';
import columns, { fields } from './columns';

const tickets = require('./data/tickets.json');

const TicketDetails = record => {
  return fields
    .filter(val => !val.visible)
    .map(f => (
      <div key={f.dataIndex}>
        <b>{f.title}:</b> {record[f.dataIndex]}
      </div>
    ));
};
class TableTickets extends React.Component {
  handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
  };
  render() {
    return (
      <Table
        columns={columns}
        dataSource={tickets}
        onChange={this.handleTableChange}
        expandedRowRender={TicketDetails}
        pagination={false}
        size="middle"
        rowClassName={(record, index) =>
          record.isopen ? 'ticket-opened' : 'ticket-closed'
        }
      />
    );
  }
}

export default TableTickets;
