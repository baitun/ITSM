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
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
  };
  render() {
    const columns_new = [
      ...columns,
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => (
          <Button
            shape="circle"
            icon="edit"
            onClick={() => this.showModal(record)}
          />
        ),
      },
    ];
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          New Ticket
        </Button>
        <ModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <Table
          columns={columns_new}
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
