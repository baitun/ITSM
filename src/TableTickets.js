import React from 'react';
import { Table } from 'antd';
import './TableTickets.css';
import columns from './columns';

const tickets = require('./data/tickets.json');

const TicketDetails = record => {
  return (
    <>
      <div>
        <b>Description:</b> {record.description}
      </div>
      <div>
        <b>Date start:</b> {record.bdate}
      </div>
      <div>
        <b>Date end:</b> {record.edate}
      </div>
    </>
  );
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
        // rowKey="id"
        onChange={this.handleTableChange}
        expandedRowRender={TicketDetails}
        pagination={false}
        // scroll={{ x: true }}
      />
    );
  }
}

export default TableTickets;
