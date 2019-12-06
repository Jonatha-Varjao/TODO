import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    [key: string]: any;
}
export interface IFormState {
    id: string;
    action: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}


class EditAction extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            action: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    public componentDidMount(): void {
        axios.get(`http://3.136.154.31/api/v1/actions/${this.state.id}`).then(data => {
            this.setState({ action: data.data });
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        
        if (this.state.values.length === 0) {
            axios.put(`http://3.136.154.31/api/v1/actions/${this.state.id}`, this.state.action).then(data => {
                this.setState({ submitSuccess: true, loading: false })
                setTimeout(() => {
                    this.props.history.push('/');
                }, 200)
            })
        }

        axios.put(`http://3.136.154.31/api/v1/actions/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 200)
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
                {this.state.action &&
                    <div>
                        <div className={"col-md-12 form-wrapper"}>
                            <h2> Edit Action </h2>
                            
                            <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                <div className="form-group col-md-12">
                                    <label htmlFor="name"> Action's Name </label>
                                    <input type="text" id="name" defaultValue={this.state.action.name} onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group col-md">
                                    <button className="btn btn-success" type="submit">
                                        Edit Action </button>
                                    {loading &&
                                        <span className="fa fa-circle-o-notch fa-spin" />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }

}
export default withRouter(EditAction)