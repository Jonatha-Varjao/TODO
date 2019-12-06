import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    name: string,
    is_completed: boolean
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class TaskCreate extends React.Component<RouteComponentProps, IFormState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            name: '',
            is_completed: false,
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }
    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            name: this.state.name,
            is_completed: this.state.is_completed
        }

        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://3.136.154.31/api/v1/tasks/`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 200)
        ]);
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2> Create Task </h2>

                    
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="name"> Task </label>
                                <input type="text" id="name" onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group pull-center" style={{ alignItems: "center"}} >
                            <button className="btn btn-success" type="submit">
                                Create Tasks
                            </button>
                            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(TaskCreate)