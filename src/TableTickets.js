import React from 'react';
import { Table } from 'antd';
import './TableTickets.css';

const columns = [
  {
    dataIndex: 'locality',
    title: 'Locality (City)',
    // filtered: true,
    sorter: (a, b) => a.locality > b.locality,
    onFilter: (value, record) => record.locality.indexOf(value) === 0,
    filters: [
      { text: 'Irkutsk', value: 'Irkutsk' },
      { text: 'Rostov', value: 'Rostov' },
      { text: 'Saransk', value: 'Saransk' },
      { text: 'Chelyabinsk', value: 'Chelyabinsk' },
    ],
  },
  {
    dataIndex: 'system',
    title: 'System name',
    sorter: (a, b) => a.system > b.system,
  },
  {
    dataIndex: 'entryid',
    title: 'BPM Ticket',
    render: entryid => (
      <a
        href={`https://bpmonline.com/?tt=${entryid}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {entryid}
      </a>
    ),
  },
  {
    dataIndex: 'status',
    title: 'Status',
  },
];

const tickets = require('./data/tickets.json');

const TicketDetails = record => {
  return <div>{record.description}</div>;
};
/**
 * @todo Add interactivity
 * @body Test
 */
class TableTickets extends React.Component {
  handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
  };
  render() {
    return (
      <Table
        columns={columns}
        dataSource={tickets}
        rowKey="id"
        onChange={this.handleTableChange}
        expandedRowRender={TicketDetails}
        pagination={false}
        // scroll={{ x: true }}
      />
    );
  }
}

export default TableTickets;
