import React from 'react';
import { Input, Select, Checkbox, DatePicker } from 'antd';

export const fields = [
  {
    dataIndex: 'locality',
    title: 'Место (город)',
    visible: true,
    required: true,
    sorter: (a, b) => ('' + a.locality).localeCompare(b.locality),
    onFilter: (value, record) => record.locality.indexOf(value) === 0,
    filters: [
      { text: 'Irkutsk', value: 'Irkutsk' },
      { text: 'Rostov', value: 'Rostov' },
      { text: 'Saransk', value: 'Saransk' },
      { text: 'Chelyabinsk', value: 'Chelyabinsk' },
    ],
    formComponent: (
      <Select>
        <Select.Option value="0">Irkutsk</Select.Option>
        <Select.Option value="1">Rostov-on-Don</Select.Option>
        <Select.Option value="2">Saransk</Select.Option>
        <Select.Option value="3">Chelyabinsk</Select.Option>
      </Select>
    ),
  },
  {
    dataIndex: 'system',
    title: 'Система',
    visible: true,
    required: false,
    sorter: (a, b) => a.system > b.system,
    formComponent: (
      <Select>
        <Select.Option value="0">BPM</Select.Option>
        <Select.Option value="1">CRM</Select.Option>
        <Select.Option value="2">Mail</Select.Option>
        <Select.Option value="3">Internet</Select.Option>
      </Select>
    ),
  },
  {
    dataIndex: 'description',
    title: 'Описание',
    visible: false,
    required: false,
    formComponent: <Input.TextArea autosize={{ minRows: 2 }} />,
  },
  {
    dataIndex: 'entryid',
    title: 'BPM Ticket',
    visible: true,
    required: false,
    render: entryid => (
      <a
        href={`https://bpmonline.com/?tt=${entryid}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {entryid}
      </a>
    ),
    formComponent: <Input />,
  },
  {
    dataIndex: 'isopen',
    title: 'Открыта?',
    visible: true,
    required: false,
    render: (isopen, record) => <Checkbox disabled checked={isopen} />,
    sorter: (a, b) => a.isopen - b.isopen,
    onFilter: (value, record) => parseInt(value) === record.isopen,
    filters: [{ text: 'Open', value: 1 }, { text: 'Close', value: 0 }],
    formComponent: <Checkbox />,
  },
  {
    dataIndex: 'bdate',
    title: 'Дата начала',
    visible: false,
    required: false,
    formComponent: <DatePicker />,
  },
  {
    dataIndex: 'edate',
    title: 'Дата завершения',
    visible: false,
    required: false,
    formComponent: <DatePicker />,
  },
];

const columns = fields.filter(val => val.visible);

export default columns;
