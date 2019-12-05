import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

interface IState {
    tasks: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { tasks: [] }
    }
    public componentDidMount(): void {
        axios.get(`http://localhost:8080/api/v1/tasks/`).then(data => {
            this.setState({ tasks: data.data })
        })
    }

    public deleteTask(id: number) {
        axios.delete(`http://localhost:8080/api/v1/tasks/${id}`).then(data => {
            const index = this.state.tasks.findIndex(tasks => tasks.id === id);
            this.state.tasks.splice(index, 1);
            this.props.history.push('/');
        })
    }

    public render() {
        const tasks = this.state.tasks;
        return (
            <div>
                {tasks.length === 0 && (
                    <div className="text-center">
                        <h2>No tasks found at the moment</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">is_completed</th>
                                    {/* <th scope="col">Sub Tasks</th> */}
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks && tasks.map(tasks =>
                                    <tr key={tasks.id}>
                                        <td>{tasks.name}</td>
                                        <td>{tasks.is_completed}</td>
                                        {/* <td>{tasks.actions}</td> */}
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`edit/${tasks.id}`} className="btn btn-sm btn-outline-secondary" style={{background: "yellow", color: "black"}} >Edit Task </Link>
                                                    <button className="btn btn-sm btn-outline-secondary" style={{background: "red", color: "black"}} onClick={() => this.deleteTask(tasks.id)}>Delete Task</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}