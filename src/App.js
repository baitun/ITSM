import React from 'react';
import TableTickets from './TableTickets';
import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={ru_RU}>
        <Router>
          <React.Fragment>
            <Link to='/ITSM' >Table tickets</Link>
            <Switch>
              {/* <Redirect from='/' to='/ITSM/' /> */}
              <Route path="/" exact component={TableTickets} />
              <Route path="/ITSM" exact component={TableTickets} />
              <Route component={() => <div>404</div>} />
            </Switch>
          </React.Fragment>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
