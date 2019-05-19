import React from 'react';


class RowComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            isEditable: false,
        }
        this.editComments = this.editComments.bind(this);
        this.saveComments = this.saveComments.bind(this);
    }

    editComments() {
        this.setState({ isEditable: true });
    }

    saveComments() {
        //this.props.updateRow(this.props.index, this.refs.editedComment.value);
        this.setState({ isEditable: false });
    }

    render() {

        return (
            <div>
                {/* <textarea defaultValue={this.state.isEditable ? this.refs.editedComment.value : this.props.comment} disabled={!this.state.isEditable} ref="editedComment"></textarea> */}

                <textarea defaultValue={this.props.comment} disabled={!this.state.isEditable} ref="editedComment"></textarea>

                {
                    !this.state.isEditable &&
                    <div>
                        <button onClick={this.editComments}>Edit</button>
                        <button onClick={() => this.props.deleteRow(this.props.index)} > Remove</button>
                    </div>
                }

                {this.state.isEditable &&
                    <div>
                        <button onClick={this.saveComments}>Save</button>
                    </div>
                }
            </div>
        )
    }
}

export default RowComponent;