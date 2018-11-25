import React from 'react';
import { Form, Modal } from 'antd';
import moment from 'moment';
import { fields } from './columns';

const ModalForm = Form.create()(
  class extends React.Component {
    render() {
      console.log('Render ModalForm, record =', this.props.record);
      const { visible, onCancel, onOk, form, record } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      };
      const formItems = fields.map(f => (
        <Form.Item {...formItemLayout} label={f.title} key={f.dataIndex}>
          {getFieldDecorator(f.dataIndex, {
            rules: [
              {
                required: f.required,
                message: `Please Input ${f.title}!`,
              },
            ],
            valuePropName: f.dataIndex === 'isopen' ? 'checked' : 'value',
            initialValue:
              f.dataIndex === 'bdate' || f.dataIndex === 'edate'
                ? moment(record[f.dataIndex]).isValid()
                  ? moment(record[f.dataIndex])
                  : null
                : record[f.dataIndex],
          })(f.formComponent)}
        </Form.Item>
      ));
      return (
        <Modal
          visible={visible}
          title="Ticket properties"
          onCancel={onCancel}
          onOk={onOk}
        >
          <Form>{formItems}</Form>
        </Modal>
      );
    }
  }
);

export default ModalForm;
