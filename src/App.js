import React from 'react';
import TableTickets from './TableTickets';
import TableTicketsAdmin from './TableTicketsAdmin';
import { LocaleProvider, Menu, Layout, Icon } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { hasRole, isAllowed } from './auth';

const user = {
  roles: ['admin'],
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
          <Layout>
            <Layout.Header>
              <div className="h-logo">IVR</div>
              <Menu
                mode="horizontal"
                theme="dark"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item>
                  <Link to="/">Tickets</Link>
                </Menu.Item>
                {hasRole(user, ['admin']) && (
                  <Menu.Item>
                    <Link to="admin">Admin</Link>
                  </Menu.Item>
                )}
              </Menu>
              <div className="h-user">
                <Icon
                  type={user.roles.includes('admin') ? 'logout' : 'login'}
                  title={user.roles.includes('admin') ? 'logout' : 'login'}
                  onClick={() =>
                    this.setState(prevState => ({
                      user: {
                        roles: prevState.user.roles.includes('admin')
                          ? ['user']
                          : ['admin'],
                      },
                    }))
                  }
                />
              </div>
            </Layout.Header>
            <Layout.Content style={{ padding: '0 50px' }}>
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 'calc(100vh - 64px - 68px)',
                }}
              >
                {/* <h1>IT Service Management</h1> */}

                <Switch>
                  <Redirect exact from="/" to="/IVR/" />
                  <Route exact path="/IVR" component={TableTickets} />
                  {hasRole(user, ['admin']) && (
                    <Route
                      exact
                      path="/IVR/admin"
                      component={TableTicketsAdmin}
                    />
                  )}
                  <Route component={() => <div>404. Page Not Found</div>} />
                </Switch>
              </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              IVR Management ©
            </Layout.Footer>
          </Layout>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}

export default App;
