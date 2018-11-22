import React from 'react';
import { Form, Modal, Input, Radio, Select, Checkbox, DatePicker } from 'antd';

const ModalForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      };
      return (
        <Modal
          visible={visible}
          title="Create a new Ticket"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form>
            <Form.Item {...formItemLayout} label="Locality (City)">
              {getFieldDecorator('title')(
                <Select mode="multiple">
                  <Select.Option value="0">Irkutsk</Select.Option>
                  <Select.Option value="1">Rostov-on-Don</Select.Option>
                  <Select.Option value="2">Saransk</Select.Option>
                  <Select.Option value="3">Chelyabinsk</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="System">
              {getFieldDecorator('system')(
                <Select>
                  <Select.Option value="0">BPM</Select.Option>
                  <Select.Option value="1">CRM</Select.Option>
                  <Select.Option value="2">Mail</Select.Option>
                  <Select.Option value="3">Internet</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Description">
              {getFieldDecorator('description')(
                <Input.TextArea autosize={{ minRows: 2 }} />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="BPM Ticket ID">
              {getFieldDecorator('descentryidription')(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Is open?">
              {getFieldDecorator('status')(<Checkbox />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Date start">
              {getFieldDecorator('bdate')(<DatePicker />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Date end">
              {getFieldDecorator('edate')(<DatePicker />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default ModalForm;
