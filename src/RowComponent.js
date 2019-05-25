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
        this.props.updateRow(this.props.index, this.refs.editedComment.value);
        this.setState({ isEditable: false });
    }

    render() {

        return (
            <tbody>
                <tr>
                    {/* <textarea defaultValue={this.state.isEditable ? this.refs.editedComment.value : this.props.comment} disabled={!this.state.isEditable} ref="editedComment"></textarea> */}

                    <td>
                        <textarea defaultValue={this.props.comment} disabled={!this.state.isEditable} ref="editedComment"></textarea>
                    </td>
                    {
                        !this.state.isEditable &&
                        <td>
                            <button className="btnEdit" onClick={this.editComments}>Edit</button>
                            <button className="btnRemove" onClick={() => this.props.deleteRow(this.props.index)} > Remove</button>
                        </td>
                    }

                    {this.state.isEditable &&
                        <td >
                            <button className="btnAdd" onClick={this.saveComments}>Save</button>
                        </td>
                    }
                </tr>
            </tbody >
        )
    }
}

export default RowComponent;