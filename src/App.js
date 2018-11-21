import React from 'react';
import TableTickets from './TableTickets';
import TableTicketsAdmin from './TableTicketsAdmin';
import EditableTable from './EditableTable';
import { LocaleProvider, Menu } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={ru_RU}>
        <Router>
          <React.Fragment>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item>
                <Link to="/ITSM">Tickets</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ITSM/admin">Admin</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ITSM/edit">Edit</Link>
              </Menu.Item>
            </Menu>
            <h1>IT Service Management</h1>

            <Switch>
              <Redirect exact from="/" to="/ITSM/" />
              <Route exact path="/ITSM" component={TableTickets} />
              <Route exact path="/ITSM/edit" component={EditableTable} />
              <Route exact path="/ITSM/admin" component={TableTicketsAdmin} />
              <Route component={() => <div>404. Page Not Found</div>} />
            </Switch>
          </React.Fragment>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
