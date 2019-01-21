import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import './TableTickets.css';
import columns, { fields } from './columns';
import ModalForm from './ModalForm';

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
  state = {
    isModalOpen: false,
    modalRecord: {},
  };

  showModal = modalRecord => {
    this.setState({ isModalOpen: true, modalRecord });
  };

  handleModalCancel = () => {
    this.setState({ isModalOpen: false });
  };

  handleModalOk = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ isModalOpen: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    console.info('TableTicketsAdmin render');
    const columnsWithButtons = [
      ...columns,
      {
        title: 'Action',
        dataIndex: 'action',
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
        <Button type="primary" onClick={() => this.showModal(null)}>
          Добавить запись
        </Button>
        <ModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.isModalOpen}
          onCancel={this.handleModalCancel}
          onOk={this.handleModalOk}
          record={this.state.modalRecord}
        />
        <br />
        <br />
        <Table
          columns={columnsWithButtons}
          dataSource={tickets}
          expandedRowRender={TicketDetails}
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
