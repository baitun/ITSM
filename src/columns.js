import React from 'react';
import { Input, Select, Checkbox, DatePicker } from 'antd';

export const fields = [
  {
    dataIndex: 'locality',
    title: 'Регион',
    visible: true,
    required: true,
    sorter: (a, b) => ('' + a.locality).localeCompare(b.locality),
    onFilter: (value, record) => record.locality.indexOf(value) === 0,

    formComponent: <Input />,
  },
  {
    dataIndex: 'system',
    title: 'IVR',
    visible: true,
    required: false,
    sorter: (a, b) => a.system > b.system,
    formComponent: <Input />,
  },
  {
    dataIndex: 'description',
    title: 'Текст звука',
    visible: false,
    required: false,
    formComponent: <Input.TextArea autosize={{ minRows: 2 }} />,
  },
];

const columns = fields.filter(val => val.visible);

export default columns;
