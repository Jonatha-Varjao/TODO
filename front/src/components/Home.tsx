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

                    {tasks && tasks.map(tasks =>


                        < div className="card" style={{ marginBottom: "20px" }} >
                            <div className="card-header">
                                <h5 className="card-title">{tasks.name}</h5>
                            </div>

                            <div className="card-body" key={tasks.id}>
                                <p className="card-text">{tasks.is_completed}</p>
                                <p className="card-text"> AAAAAAAA {tasks.actions}</p>



                                <div>
                                    <div className="btn-group" style={{ marginBottom: "2%" }}>
                                        <Link to={`edit/${tasks.id}`} className="card-link btn btn-sm btn-outline-secondary" style={{ background: "#FBD786", color: "black", marginRight: "2%" }} >Edit Task </Link>
                                        <button className="card-link btn btn-sm btn-outline-secondary" style={{ background: "#f7797d", color: "black", marginRight: "2%" }} onClick={() => this.deleteTask(tasks.id)}>Delete Task</button>
                                        <button className="card-link btn btn-sm btn-outline-secondary" style={{ background: "#C6FFDD", color: "black" }} onClick={() => this.deleteTask(tasks.id)}>Complete Task</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">is_completed</th>
                                    <th scope="col">Sub Tasks</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            
                        </table> */}
                </div>
            </div >

        )
    }
}