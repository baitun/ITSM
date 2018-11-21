import React from 'react';
import { Table, Button } from 'antd';
import './TableTickets.css';
import columns from './columns';
import ModalForm from './ModalForm';

const tickets = require('./data/tickets.json');

const TicketDetailsAdmin = record => {
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
      <>
        <Button type="primary" onClick={this.showModal}>
          New Collection
        </Button>
        <ModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <Table
          columns={columns}
          dataSource={tickets}
          // rowKey="id"
          onChange={this.handleTableChange}
          expandedRowRender={TicketDetailsAdmin}
          pagination={false}
          // scroll={{ x: true }}
        />
      </>
    );
  }
}

export default TableTickets;
