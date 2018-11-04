import React from 'react'
import { Table } from 'antd';

const columns = [
  { dataIndex: 'locality', title: 'Locality (City)' },
  { dataIndex: 'system', title: 'System name' },
  { dataIndex: 'Description', title: 'Description (comment)' },
  { dataIndex: 'entryid', title: 'BPM Ticket' },
  { dataIndex: 'status', title: 'Status' },
  { dataIndex: 'bdate', title: 'Date start' },
  { dataIndex: 'edate', title: 'Date end' },
];

class TableTickets extends React.Component {
  render() {
    return (
      <Table columns={columns} />
    );
  }
}

export default TableTickets;