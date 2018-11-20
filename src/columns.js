import React from 'react';

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
    dataIndex: 'status',
    title: 'Status',
    editable: true,
  },
];

export default columns;
