import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    name: string,
    task_id?: string,
    is_completed?: boolean
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class ActionCreate extends React.Component<RouteComponentProps, IFormState> {

    constructor(props: RouteComponentProps) {
        super(props);
               
        this.state = {
            name: '',
            task_id: Object.values(this.props.match.params)[0],
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
            task_id: this.state.task_id,
            is_completed: this.state.is_completed
        }
        
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:8080/api/v1/tasks/${formData.task_id}/actions`, formData).then(data => [
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
                    <h2> Create Action </h2>

                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                            </div>
                    )}
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="name"> Action </label>
                                <input type="text" id="name" onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group pull-center" style={{ alignItems: "center"}} >
                            <button className="btn btn-success" type="submit">
                                Create Action
                            </button>
                            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ActionCreate)