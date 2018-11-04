import React from 'react';
import TableTickets from './TableTickets';
import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={ru_RU}>
        <TableTickets />
      </LocaleProvider>
    );
  }
}

export default App;
