import React from 'react';
import { Checkbox } from 'antd';

const columns = [
  {
    dataIndex: 'locality',
    title: 'Locality (City)',
    editable: true,
    sorter: (a, b) => ('' + a.locality).localeCompare(b.locality),
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
    editable: true,
    sorter: (a, b) => a.system > b.system,
  },
  {
    dataIndex: 'entryid',
    title: 'BPM Ticket',
    editable: true,
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
    dataIndex: 'isopen',
    title: 'Is open?',
    editable: true,
    render: (isopen, record) => <Checkbox disabled checked={isopen} />,
    sorter: (a, b) => a.isopen - b.isopen,
    onFilter: (value, record) => parseInt(value) === record.isopen,
    filters: [{ text: 'Open', value: 1 }, { text: 'Close', value: 0 }],
  },
];

export default columns;
