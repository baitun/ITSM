import React from 'react';
import { Form, Modal, Input, Radio, Select } from 'antd';

const ModalForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new Ticket"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form>
            <Form.Item label="Locality (City)">
              {getFieldDecorator('title', { rules: [{ required: true }] })(
                <Select>
                  <Select.Option value="0">Irkutsk</Select.Option>
                  <Select.Option value="1">Rostov-on-Don</Select.Option>
                  <Select.Option value="2">Saransk</Select.Option>
                  <Select.Option value="3">Chelyabinsk</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="System">
              {getFieldDecorator('system', { rules: [{ required: true }] })(
                <Select>
                  <Select.Option value="0">BPM</Select.Option>
                  <Select.Option value="1">CRM</Select.Option>
                  <Select.Option value="2">Mail</Select.Option>
                  <Select.Option value="3">Internet</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="BPM Ticket ID">
              {getFieldDecorator('descentryidription')(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default ModalForm;
