import React from 'react';
import TableTickets from './TableTickets';
import { LocaleProvider } from 'antd';
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
            <h1>IT Service Management</h1>
            <Link to="/ITSM">Table tickets</Link>{' '}
            <Link to="/ITSM/admin">Admin</Link>
            <Switch>
              <Redirect exact from="/" to="/ITSM/" />
              <Route path="/ITSM" exact component={TableTickets} />
              <Route
                path="/ITSM/admin"
                exact
                component={() => <div>There will be an admin panel</div>}
              />
              <Route component={() => <div>404. Page Not Found</div>} />
            </Switch>
          </React.Fragment>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
