import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import './TableTickets.css';
import columns, { fields } from './columns';
import ModalForm from './ModalForm';

const tickets = require('./data/tickets.json');

const TicketDetailsAdmin = record => {
  const additional_fields = fields.filter(val => !val.visible);
  return additional_fields.map(f => (
    <div key={f.dataIndex}>
      <b>{f.title}:</b> {record[f.dataIndex]}
    </div>
  ));
};
class TableTickets extends React.Component {
  state = {
    visible: false,
    record: {},
  };

  showModal = record => {
    this.setState({ visible: true, record });
  };

  handleModalCancel = () => {
    this.setState({ visible: false });
  };

  handleModalOk = () => {
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

  render() {
    console.info('TableTicketsAdmin render');
    const columns_new = [
      ...columns,
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => (
          <>
            <Button
              shape="circle"
              icon="edit"
              title="edit"
              onClick={() => this.showModal(record)}
            />
            &nbsp;
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={() => console.log(record.key)}
            >
              <Button shape="circle" icon="delete" title="delete" />
            </Popconfirm>
          </>
        ),
      },
    ];
    return (
      <>
        <Button type="primary" onClick={() => this.showModal}>
          New Ticket
        </Button>
        <ModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleModalCancel}
          onOk={this.handleModalOk}
          record={this.state.record}
        />
        <br />
        <br />
        <Table
          columns={columns_new}
          dataSource={tickets}
          onChange={this.handleTableChange}
          expandedRowRender={TicketDetailsAdmin}
          pagination={false}
          size="middle"
          rowClassName={(record, index) =>
            record.isopen ? 'ticket-opened' : 'ticket-closed'
          }
        />
      </>
    );
  }
}

export default TableTickets;
