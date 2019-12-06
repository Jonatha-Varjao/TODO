import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

interface IState {
  tasks: any[];
  completed_tasks: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { tasks: [], completed_tasks: [] }
  }
  public componentDidMount(): void {
    axios.get(`http://localhost:8080/api/v1/tasks/?is_completed=false`).then(data => {
      this.setState({ tasks: data.data })
    })
    axios.get(`http://localhost:8080/api/v1/tasks/?is_completed=true`).then(data => {
      this.setState({ completed_tasks: data.data })
    })
  }

  public deleteTask(id: string) {
    axios.delete(`http://localhost:8080/api/v1/tasks/${id}`).then(data => {
      const index = this.state.tasks.findIndex(tasks => tasks.id === id);
      this.state.tasks.splice(index, 1);
      this.props.history.push('/');
    })
  }

  public deleteAction(id: string) {
    axios.delete(`http://localhost:8080/api/v1/actions/${id}`).then(data => {
      this.componentDidMount();
    })

  }

  public completeAction(id: string) {
    axios.post(`http://localhost:8080/api/v1/actions/${id}`).then(data => {
      this.componentDidMount();
    })
  }

  public completeTask(id: string) {
    axios.post(`http://localhost:8080/api/v1/tasks/${id}`).then(data => {
      this.componentDidMount();
    })

  }

  public render() {
    const tasks = this.state.tasks;
    const completed_tasks = this.state.completed_tasks;
    const ref = this
    return (
      <div>
        <div className="container">
          <div className="row">
            {tasks && tasks.map(tasks =>
              <div className="col-sm-6" >
                < div className="card" style={{ marginBottom: "20px", marginTop: "20px" }} >
                  <div className="card-header">
                    {
                      tasks.is_completed
                        ? <h5 className="card-title" style={{ color: "green" }} >Task: {tasks.name}</h5>
                        : <h5 className="card-title" style={{ color: "red" }} >Task: {tasks.name}</h5>
                    }
                  </div>

                  <div className="card-body">
                    <p className="card-text">{tasks.is_completed}</p>

                    {tasks.actions.map(function (actions: any) {

                      return (
                        <div className="list-group">
                          Task ID: {tasks.id}

                          {
                            actions.is_completed
                              ? <li className="list-group-item clearfix" key={actions.id} style={{ color: "green" }}>
                                {actions.name}
                                <span className="pull-right">
                                  <span className="btn btn-xs btn-default" >
                                    <Link to={`actions/${actions.id}`} className="fa fa-pencil" style={{ color: "#FBD786" }} aria-hidden="true"></Link>
                                  </span>
                                  <span className="btn btn-xs btn-default" >
                                    <span className="fa fa-trash" style={{ color: "#F7797D" }} aria-hidden="true" onClick={() => ref.deleteAction(actions.id)} > </span>
                                  </span>
                                  <span className="btn btn-xs btn-default" >
                                    <span className="fa fa-times" style={{ color: "#C6FE2E" }} aria-hidden="true" onClick={() => ref.completeAction(actions.id)} > </span>
                                  </span>
                                </span>
                              </li>
                              : <li className="list-group-item clearfix" key={actions.id} style={{ color: "red" }} >{actions.name}
                                <span className="pull-right">
                                  <span className="btn btn-xs btn-default">
                                    <Link to={`actions/${actions.id}`} className="fa fa-pencil" style={{ color: "#FBD786" }} aria-hidden="true"></Link>
                                  </span>
                                  <span className="btn btn-xs btn-default">
                                    <span className="fa fa-trash" style={{ color: "#F7797D" }} aria-hidden="true" onClick={() => ref.deleteAction(actions.id)} > </span>
                                  </span>
                                  <span className="btn btn-xs btn-default">
                                    <span className="fa fa-check" style={{ color: "#C6FE2E" }} aria-hidden="true" onClick={() => ref.completeAction(actions.id)} > </span>
                                  </span>
                                </span>
                              </li>
                          }


                        </div>
                      );
                    })}



                    <div>
                      <div className="btn-group" style={{ marginTop: "2%" }}>
                        <Link to={`tasks/${tasks.id}/actions/`} className="card-link btn btn-sm" style={{ background: "#00AAFF", color: "black", marginRight: "2%" }} >Add Action </Link>
                        <Link to={`tasks/${tasks.id}`} className="card-link btn btn-sm" style={{ background: "#FBD786", color: "black", marginRight: "2%" }} >Edit Task </Link>
                        <button className="card-link btn btn-sm" style={{ background: "#F7797D", color: "black", marginRight: "2%" }} onClick={() => this.deleteTask(tasks.id)}>Delete Task</button>
                        <button className="card-link btn btn-sm" style={{ background: "#C6FE2E", color: "black" }} onClick={() => this.completeTask(tasks.id)}>Complete Task</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {tasks && completed_tasks.map(tasks =>
              <div className="col-sm-6" >
                < div className="card" style={{ marginBottom: "20px", marginTop: "20px" }} >
                  <div className="card-header">
                    <h5 className="card-title" style={{ color: "green" }} >Task: {tasks.name}</h5>

                  </div>

                  <div className="card-body">
                    <p className="card-text">{tasks.is_completed}</p>

                    {tasks.actions.map(function (actions: any) {

                      return (
                        <div className="list-group">
                          {
                            actions.is_completed
                              ? <li className="list-group-item clearfix" key={actions.id} style={{ color: "green" }}>
                                {actions.name}
                                <span className="pull-right">
                                  <span className="btn btn-xs btn-default" >
                                    <Link to={`actions/${actions.id}`} className="fa fa-pencil" style={{ color: "#FBD786" }} aria-hidden="true"></Link>
                                  </span>
                                  <span className="btn btn-xs btn-default" >
                                    <Link to={`actions/${actions.id}`} className="fa fa-trash" style={{ color: "#F7797D" }} aria-hidden="true"></Link>
                                  </span>
                                  <span className="btn btn-xs btn-default" >
                                    <span className="fa fa-times" style={{ color: "#00AAFF" }} aria-hidden="true" onClick={() => ref.completeAction(actions.id)}></span>
                                  </span>
                                </span>
                              </li>

                              : <li className="list-group-item clearfix" key={actions.id} style={{ color: "red" }} >{actions.name}
                                <span className="pull-right">
                                  <span className="btn btn-xs btn-default">
                                    <Link to={`actions/${actions.id}`} className="fa fa-pencil" style={{ color: "#FBD786" }} aria-hidden="true"></Link>
                                  </span>
                                  <span className="btn btn-xs btn-default">
                                  <span className="fa fa-trash" style={{ color: "#F7797D" }} aria-hidden="true" onClick={() => ref.deleteAction(actions.id)} > </span>
                                  </span>
                                  <span className="btn btn-xs btn-default" >
                                    <span className="fa fa-check" style={{ color: "#C6FE2E" }} aria-hidden="true" onClick={() => ref.completeAction(actions.id)} > </span>
                                  </span>
                                </span>
                              </li>
                          }


                        </div>
                      );
                    })}



                    <div>
                      <div className="btn-group" style={{ marginTop: "2%" }}>

                        <Link to={`tasks/${tasks.id}/actions/`} className="card-link btn btn-sm" style={{ background: "#00AAFF", color: "black", marginRight: "2%" }} >Add Action </Link>
                        <Link to={`tasks/${tasks.id}`} className="card-link btn btn-sm" style={{ background: "#FBD786", color: "black", marginRight: "2%" }} >Edit Task </Link>
                        <button className="card-link btn btn-sm" style={{ background: "#F7797D", color: "black", marginRight: "2%" }} onClick={() => this.deleteTask(tasks.id)}>Delete Task</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}



          </div>
        </div>
      </div >

    )
  }
}