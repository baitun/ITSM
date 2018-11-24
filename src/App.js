import React from 'react';
import TableTickets from './TableTickets';
import TableTicketsAdmin from './TableTicketsAdmin';
import EditableTable from './EditableTable';
import { LocaleProvider, Menu } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { hasRole, isAllowed } from './auth';

const user = {
  roles: ['user'],
  rights: ['can_view_articles'],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user,
    };
  }
  render() {
    const { user } = this.state;
    return (
      <LocaleProvider locale={ru_RU}>
        <BrowserRouter>
          <>
            <Menu mode="horizontal">
              <Menu.Item
                onClick={() =>
                  this.setState(prevState => ({
                    user: {
                      roles: prevState.user.roles.includes('admin')
                        ? ['user']
                        : ['admin'],
                    },
                  }))
                }
              >
                {user.roles.includes('admin') ? 'Logout' : 'Login'}
              </Menu.Item>

              <Menu.Item>
                <Link to="/">Tickets</Link>
              </Menu.Item>
              {hasRole(user, ['admin']) && (
                <Menu.Item>
                  <Link to="admin">Admin</Link>
                </Menu.Item>
              )}
            </Menu>

            <h1>IT Service Management</h1>

            <Switch>
              <Redirect exact from="/" to="/ITSM/" />
              <Route exact path="/ITSM" component={TableTickets} />
              {/* @TODO remove it */}
              <Route exact path="/ITSM/edit" component={EditableTable} />
              {hasRole(user, ['admin']) && (
                <Route exact path="/ITSM/admin" component={TableTicketsAdmin} />
              )}
              <Route component={() => <div>404. Page Not Found</div>} />
            </Switch>
          </>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}

export default App;
