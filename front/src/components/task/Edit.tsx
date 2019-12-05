import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    [key: string]: any;
}
export interface IFormState {
    id: string;
    task: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}


class EditTask extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            task: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:8080/api/v1/tasks/${this.state.id}`).then(data => {
            this.setState({ task: data.data });
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:8080/api/v1/tasks/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }

    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }
    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div className="App">
                {this.state.task &&
                    <div>
                        < h1 > Task List Management App</h1>
                        <p> Built with React.js and TypeScript </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Task </h2>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Tasks's details has been edited successfully </div>
                                )}
                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="name"> Task's Name </label>
                                        <input type="text" id="name" defaultValue={this.state.task.name} onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="last_name"> Is Completed? </label>
                                        <input type="checkbox" id="is_completed" defaultValue={this.state.task.is_completed} onChange={(e) => this.handleInputChanges(e)} name="is_completed" className="form-control" placeholder="" />
                                    </div>

                                    <div className="form-group col-md">
                                        <button className="btn btn-success" type="submit">
                                            Edit Task </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}
export default withRouter(EditTask)