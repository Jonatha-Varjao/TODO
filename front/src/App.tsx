import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/Home';
import TaskCreate from './components/task/Create';
import EditTask from './components/task/Edit';
import ActionCreate from './components/action/Create';
import EditAction from './components/action/Edit';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/tasks'}> Create Task </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/tasks'} exact component={TaskCreate} />
          <Route path={'/tasks/:id/actions'} exact component={ActionCreate} />
          <Route path={'/tasks/:id'} exact component={EditTask} />
          <Route path={'/actions/:id'} exact component={EditAction} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);